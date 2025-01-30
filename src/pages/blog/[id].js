import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

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

  // Reemplazar etiquetas [poem] y/o <poem> en el contenido
  const transformedContent = matterResult.content
    .replace(/[\[\<]poema*[\]\>]/g, '<div class="poem">')
    .replace(/[\[\<]\/poema*[\]\>]/g, '</div>');

  // Procesar el contenido transformado con remark y rehype
  const processedContent = await unified()
  .use(remarkParse) // Parsear Markdown
  .use(remarkGfm) // Habilitar soporte para tablas y otras extensiones GFM
  .use(remarkRehype, { allowDangerousHtml: true }) // Convertir a HTML
  .use(rehypeHighlight) // Resaltado de código y texto
  .use(rehypeStringify, { allowDangerousHtml: true }) // Convertir a string HTML
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
        <h1 className="text-4xl font-bold article-title">{postData.title}</h1>
        <p><span className='pseudo-name'>by @fighsthumbs</span><span className='autor-name-hide'> — Benjamín Álvarez Rodríguez</span></p>
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
