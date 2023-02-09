import React from 'react';
import RootLayout from '@/components/layout/layout';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return (
        <RootLayout isUserEntering={false}>
            <div>/about</div>
        </RootLayout>
    )
}
export default page;