import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(postsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Usar gray-matter para obtener datos y contenido del post
  const matterResult = matter(fileContents);

  // Reemplazar etiquetas [poema] y [/poema] en el contenido
  const transformedContent = matterResult.content
    .replace(/\*\*\[poema\]\*\*/g, '<div class="poema">')
    .replace(/\*\*\[\/poema\]\*\*/g, '</div>');

  // Procesar el contenido transformado con remark y rehype
  const processedContent = await unified()
    .use(remarkParse) // Parsear Markdown
    .use(remarkRehype, { allowDangerousHtml: true }) // Convertir a HTML sin eliminar etiquetas personalizadas
    .use(rehypeStringify, { allowDangerousHtml: true }) // Convertir a HTML string
    .process(transformedContent);

  const contentHtml = processedContent.toString();

  return {
    props: {
      postData: {
        id: params.id,
        ...matterResult.data,
        contentHtml, // Guardar contenido HTML procesado
      },
    },
  };
}

export default function Post({ postData }) {
  return (
    <div className="container mx-auto p-4">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold">{postData.title}</h1>
        <p className="text-gray-500">{postData.date}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: postData.contentHtml,
          }}
        />
      </article>
    </div>
  );
}
