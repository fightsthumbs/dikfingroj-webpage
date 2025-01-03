import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const musicDirectory = path.join(process.cwd(), 'src/content/music');

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
