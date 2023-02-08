import RootLayout from "@/components/layout/layout";
import CtaButton from "@/components/global/CtaButton";
import Alert from "@/components/global/Alert";


export default function Home() {
  return (
    <RootLayout isUserEntering= {false}>
       <div>/Home</div>
       <CtaButton label="Call to action"/>
       <Alert label="Alerta por error random"/>
    </RootLayout>
  )
}
