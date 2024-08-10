import { Button } from '@chakra-ui/react';

import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

export function App() {
    const { t } = useTranslation('homepage');

    if (!isMobile) {
        return <>{t('onlyForMobile')}</>;
    }

    return (
        <>
            Welcome to @@atime
            <Button colorScheme="blue">Button</Button>
        </>
    );
}
