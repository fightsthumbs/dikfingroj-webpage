import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export function getAllProjects() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parsear contenido Markdown y metadatos (frontmatter)
    const { data, content } = matter(fileContents);
    return {
      id: data.id || fileName.replace(/\.md$/, ''),
      ...data,
      content, // Contenido del proyecto
    };
  });
}

export function getSortedPostsData() {
  // Leer los archivos en la carpeta posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usar gray-matter para parsear el contenido del post
    const matterResult = matter(fileContents);

    // Procesar el contenido para identificar poemas
    const processedContent = processPoems(matterResult.content);

    return {
      id: fileName.replace(/\.md$/, ''),
      ...matterResult.data,
      content: processedContent, // Agregar el contenido procesado
    };
  });

  return allPostsData.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

// Función para procesar poemas
function processPoems(content) {
  return content
    .replace(/\*\*\[poema\]\*\*/g, '<div class="poema">') // Reemplazar inicio del poema
    .replace(/\*\*\[\/poema\]\*\*/g, '</div>'); // Reemplazar fin del poema
}