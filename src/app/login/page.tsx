import RootLayout from "@/components/layout/layout";
import UserForm from "@/components/userform/UserForm";

const page: React.FC = () => {
  return (
    <RootLayout isUserEntering={true}>
      <div className="flex h-screen flex-col justify-center items-center gap-[60px]">
        <h1 className="text-Text-Relevant font-black text-xxl ">
          Log In
        </h1>
        <UserForm text="Don't have an account?" link="Sign up" url="/signup" />
      </div>
    </RootLayout>
  );
};
export default page;
