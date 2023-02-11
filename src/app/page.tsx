import RootLayout from "@/components/layout/layout";
import Alert from "@/components/global/Alert";
import PostCard from "@/components/postcard/PostCard";

export default function Home() {
  return (
    <RootLayout isUserEntering={false}>
      <Alert label="Alerta por error random!" />
      <div className="w-full flex justify-center">
        <div className="w-[90%] flex flex-col gap-[30px] md:w-[65%] xl:w-[50%] 2xl:w-[35%] mt-[60px] mb-[140px]">
          <PostCard
            url="/desing/ux-ui/epic-title-for-amazing-post"
            title="Epic title for amazing post"
            author="Arotu"
            authorcontact="https://www.linkedin.com/in/ariel-alzogaray-flores-666833246/"
            category="Design"
            date="08.02.2023"
            readtime={2}
            views={13}
            likes={6}
          />
          <PostCard
            url="/desing/ux-ui/epic-title-for-amazing-post"
            title="Epic title for amazing post"
            author="Arotu"
            authorcontact="https://www.linkedin.com/in/ariel-alzogaray-flores-666833246/"
            category="Design"
            date="08.02.2023"
            readtime={2}
            views={13}
            likes={6}
          />
        </div>
      </div>
    </RootLayout>
  );
}
