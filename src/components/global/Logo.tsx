import React from 'react';
import Link from "next/link";

type LogoProps = {
    
};

const Logo:React.FC<LogoProps> = () => {
    
    return <div className='w-1/4 font-black text-Text-Relevant text-base ml-[32px]'><Link href='/'>Tech-Gap.</Link></div>
}
export default Logo;