import RootLayout from "@/components/layout/layout";
import Input from "@/components/global/Input";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <RootLayout isUserEntering={true}>
      <div>/Home</div>
      <Input placeholder="Enter your email" />
    </RootLayout>
  );
};
export default page;