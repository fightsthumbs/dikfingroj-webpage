import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Leer los archivos en la carpeta posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usar gray-matter para parsear el contenido del post
    const matterResult = matter(fileContents);

    return {
      id: fileName.replace(/\.md$/, ''),
      ...matterResult.data,
    };
  });

  // Ordenar por fecha
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
