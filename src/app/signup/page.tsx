import RootLayout from "@/components/layout/layout";
import Form from "@/components/userform/Form";

const page: React.FC = () => {
  return (
    <RootLayout isUserEntering={true}>
      <div className="flex h-screen flex-col justify-center items-center gap-[60px]">
        <h1 className="text-Text-Relevant font-black text-mdxxl md:text-xxl">Sign up</h1>
        <Form text="Have an account?" link="Log in" url="/login" />
      </div>
    </RootLayout>
  );
};
export default page;
