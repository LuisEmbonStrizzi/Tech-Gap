import React from 'react';

type ChipProps = {
    label: string;
};

const Chip:React.FC<ChipProps> = ({ label }) => {
    
    return (
        <a href="#" className='p-[10px] bg-Background-Light ease-out duration-150 border border-Background-Variations text-Text-Default rounded hover:border-Text-Relevant '>
            {label}
        </a>
    )
}
export default Chip;