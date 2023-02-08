import React from 'react';

type AlertProps = {
    label:string;
};

const Alert:React.FC<AlertProps> = ({ label }) => {
    
    return <div>{label}</div>
}
export default Alert;