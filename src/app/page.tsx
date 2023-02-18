import RootLayout from "@/components/layout/layout";
import Alert from "@/components/global/Alert";
import PostCard from "@/components/postcard/PostCard";
import getPostMetadata from "@/libs/getPostMetadata";

type Props = {};

const page: React.FC = () => {
  const postMetaData = getPostMetadata();
  return (
    <RootLayout isUserEntering={false} path="Home">
      <Alert label="Alerta por error random!" />
      <div className="w-full flex justify-center mt-[140px] lg:mt-[80px]">
        <>
          <div className="w-[90%] flex flex-col gap-[30px] md:w-[65%] xl:w-[50%] 2xl:w-[35%] mt-[60px] mb-[140px]">
            {postMetaData.map((post) => {
              const categories = post.category.toString().replaceAll(",", "-");
              return (
                <PostCard
                  key={post.slug}
                  url={`/${categories}/${post.slug}`}
                  title={post.title}
                  author={post.author}
                  authorcontact={post.authorContact}
                  date={post.date}
                  readtime={post.readtime}
                  views={post.slug}
                  likes={6}
                />
              );
            })}
          </div>
        </>
      </div>
    </RootLayout>
  );
};
export default page;
