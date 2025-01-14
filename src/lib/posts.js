import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');
const projectsDirectory = path.join(process.cwd(), 'src/content/projects');
const musicDirectory = path.join(process.cwd(), 'src/content/music');

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
    const processedContent = matterResult.content;

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

export function getAllMusic() {
  const fileNames = fs.readdirSync(musicDirectory);

  return fileNames.map((fileName) => {
    const fullPath = path.join(musicDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parsear el contenido Markdown
    const { data } = matter(fileContents);
    return {
      id: fileName.replace(/\.md$/, ''), // Nombre del archivo como ID
      ...data,
    };
  });
}

// Función para procesar poemas //Esta función no función, sino la que está dentro de [id].js
// function processPoems(content) {
//   return content
//     .replace(/\*\*\*\[poem\]/g, '<div class="poema">') // Reemplazar inicio del poema
//     .replace(/\[\/poem\]/g, '</div>') // Reemplazar fin del poema
//     .replace(/\<poem\>/g, '<div class="poema">') // Reemplazar inicio del poema
//     .replace(/\<\/poem\>/g, '</div>'); // Reemplazar fin del poema
// }