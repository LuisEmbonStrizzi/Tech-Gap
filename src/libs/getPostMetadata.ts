import fs from "fs";
import matter from "gray-matter";

interface PostMetadata {
  title: string;
  date: string;
  slug: string;
  author: string;
  readtime: number;
  category: [];
  authorContact: string;
}

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder); //Leo el directorio
  const markdownPosts = files.filter((file) => file.endsWith(".md")); //Solo obtengo los archivos md

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8"); //Obtengo el md
    const matterResult = matter(fileContents); //Convierte frontmatter a un objecto asi puedo acceder a las propiedades

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
      author: matterResult.data.author,
      readtime: matterResult.data.readtime,
      category: matterResult.data.category,
      authorContact: matterResult.data.authorcontact
    };
  });

  return posts
    .sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }

      return 0;
    })
    .reverse();
};
export default getPostMetadata;
