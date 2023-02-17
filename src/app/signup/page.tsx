import RootLayout from "@/components/layout/layout";
import UserForm from "@/components/userform/UserForm";

const page: React.FC = () => {
  return (
    <RootLayout isUserEntering={true} path='Sign Up'>
      <div className="flex h-screen flex-col justify-center items-center gap-[60px]">
        <h1 className="text-Text-Relevant font-black text-xxl">Sign up</h1>
        <UserForm text="Have an account?" link="Log in" url="/login" />
      </div>
    </RootLayout>
  );
};
export default page;
