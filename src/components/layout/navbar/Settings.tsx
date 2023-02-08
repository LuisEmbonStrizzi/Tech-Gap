import React from 'react';

type SettingsProps = {
    
};

const Settings:React.FC<SettingsProps> = () => {
    
    return (
        <div className='flex flex-col gap-[15px] text-base'>
            <div>
                <span className="text-Text-Relevant">English </span><span className="text-Text-Default">| Español</span> 
            </div>
            <div>
                <span className="text-Text-Relevant">Dark </span><span className="text-Text-Default">| Light</span> 
            </div> 
        </div>
    )
}
export default Settings;