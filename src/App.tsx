import { isMobile } from 'react-device-detect';
import { DesktopMessage } from './components/DesktopMessage';
import { NavMenu } from './components/NavMenu';
import { Container } from '@chakra-ui/react';
import { Router } from './router/Router';

export function App() {
    if (!isMobile) {
        return <DesktopMessage />;
    }

    return (
        <Container p="4">
            <NavMenu />
            <Router />
        </Container>
    );
}
