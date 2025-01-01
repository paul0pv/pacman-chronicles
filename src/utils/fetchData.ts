import fs from 'fs/promises';
import path from 'path';

export async function fetchArticles() {
  const dir = path.join(process.cwd(), 'src/data/articles');
  const files = await fs.readdir(dir);
  const articles = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      return { file, content };
    })
  );
  return articles;
}
