import RootLayout from "@/components/layout/layout";
import Input from "@/components/global/Input";
import Form from "@/components/userform/Form";
type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <RootLayout isUserEntering={true}>
      <div className="h-screen flex flex-col justify-center items-center gap-[60px]">
        <h1 className="text-Text-Relevant font-black text-xxl">Sign up</h1>
        <Form text="Have an account?" link="Log in" />
      </div>
    </RootLayout>
  );
};
export default page;
