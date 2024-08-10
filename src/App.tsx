import { Button } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

export function App() {
    if (!isMobile) {
        return <>Only avaiable on mobile devices. Switch to mobile</>;
    }

    return (
        <>
            Welcome to @@atime
            <Button colorScheme="blue">Button</Button>
        </>
    );
}
