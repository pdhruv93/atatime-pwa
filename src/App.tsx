import { isMobile } from 'react-device-detect';
import { DesktopMessage } from './components/DesktopMessage';
import { NavMenu } from './components/NavMenu';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export function App() {
    if (!isMobile) {
        return <DesktopMessage />;
    }

    return (
        <Container p="4" w="100%" h="90vh">
            <NavMenu />
            <Outlet />
        </Container>
    );
}
