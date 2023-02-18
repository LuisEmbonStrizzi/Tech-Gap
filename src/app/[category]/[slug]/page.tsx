import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/libs/getPostMetadata";
import RootLayout from "@/components/layout/layout";
import Aside from "@/components/Aside/Aside";
import ViewCounter from "@/components/postcard/ViewCounter";

type pageProps = {};

//Slug es el nombre del archivo pero sin la extensión

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8"); //Le muestro archivos y devuelve el contenido
  const matterResult = matter(content); //Convierte frontmatter a un objecto asi puedo acceder a las propiedades
  return matterResult;
};

const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const page: React.FC<pageProps> = (props: any) => {
  const slug = props.params.slug;
  const capitalizeSlug = slug.charAt(0).toUpperCase() + slug.slice(1);
  const post = getPostContent(slug);
  return (
    <RootLayout isUserEntering={false} path={capitalizeSlug}>
      <div className="hidden">
        <ViewCounter slug={slug} blogPage={true} />
      </div>
      <Aside />
      <div className="flex flex-col items-center justify-center pt-[80px] ">
        <article className="prose lg:prose-xl pt-[60px] ">
          <h1 className="text-Danger">{post.data.title} </h1>
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </RootLayout>
  );
};
export default page;

//Cosas que faltan agregar:
//Buildear el proyecto y ver bien lo de rutas estáticas
//Funcionalidad de likes y visualizaciones
