import React from 'react';

type SettingsProps = {
    
};

const Settings:React.FC<SettingsProps> = () => {
    
    return (
        <div className='flex flex-col gap-[15px] text-base'>
            <div className="text-Text-Default font-medium">
                <span className="text-Text-Relevant">English </span>|<span className="text-Text-Default"> Español</span> 
            </div>
            <div className="text-Text-Default font-medium">
                <span className="text-Text-Relevant font-medium">Dark </span>|<span className="text-Text-Default font-medium"> Light</span> 
            </div> 
        </div>
    )
}
export default Settings;