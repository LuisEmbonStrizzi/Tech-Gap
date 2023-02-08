import '../../styles/globals.css';
import Head from "./head";
import Navbar from "./navbar/Navbar";
import Footer from './Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className="font-satoshi bg-Background-Default">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
