import Link from 'next/link';
import React from 'react';

type ChipProps = {
    label: string;
};

const Chip:React.FC<ChipProps> = ({ label }) => {
    
    return (
        <Link href="#" className='p-[10px] bg-Background-Light ease-out duration-150 border border-Background-Variations text-Text-Relevant rounded hover:border-Text-Default hover:bg-[#181E2B]'>
            {label}
        </Link>
    )
}
export default Chip;