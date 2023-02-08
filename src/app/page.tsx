import RootLayout from "@/components/layout/layout";
import CtaButton from "@/components/global/CtaButton";
import Alert from "@/components/global/Alert";
import PostCard from "@/components/postcard/PostCard";


export default function Home() {
  return (
    <RootLayout isUserEntering= {false}>
       <div>/Home</div>
       <CtaButton label="Call to action"/>
       <Alert label="Alerta por error random"/>
       <PostCard url='/desing/ux-ui/epic-title-for-amazing-post' title='Epic title for amazing post' author='Arotu' authorcontact="https://www.linkedin.com/in/ariel-alzogaray-flores-666833246/" category='Design' date='08.02.2023' readtime={2} views={13}/>
       <input type="text" className="bg-Background-Light placeholder-Extras border border-Background-Light focus:outline-CTA-Default"/>
    </RootLayout>
  )
}
