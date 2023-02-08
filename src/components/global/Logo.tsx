import React from 'react';
import Link from "next/link";

type LogoProps = {
    
};

const Logo:React.FC<LogoProps> = () => {
    
    return <div className='font-black text-Text-Relevant text-base '><Link href='/'>Tech-Gap.</Link></div>
}
export default Logo;