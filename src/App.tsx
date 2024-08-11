import { Button } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import { DesktopMessage } from './components/DesktopMessage';

export function App() {
    if (!isMobile) {
        return <DesktopMessage />;
    }

    return (
        <>
            Welcome to @@atime
            <Button colorScheme="blue">Button</Button>
        </>
    );
}
