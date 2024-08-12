import {
    ButtonGroup,
    Center,
    Heading,
    HStack,
    Icon,
    IconButton,
    Link,
    VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { APP_NAME, PUBLIC_URL } from '../utils/constants';
import Lottie from 'lottie-react';
import mobileAnimation from '../lottie/mobile.json';
import { MdLink, MdWhatsapp } from 'react-icons/md';
import { AppDemo } from './AppDemo';
import { copyToClipboard } from '../utils';
import { useToast } from '@chakra-ui/react';

export function DesktopMessage() {
    const { t } = useTranslation('translation', { keyPrefix: 'desktopMode' });
    const toast = useToast();
    const whatsappLink = `https://wa.me/?text=${t('whatsappLinkMessage', {
        APP_NAME,
        link: encodeURIComponent(PUBLIC_URL),
    })}`;

    const onLinkCopyHandler = () => {
        copyToClipboard(PUBLIC_URL);
        toast({
            title: t('linkCopied'),
            status: 'info',
            duration: 1000,
            isClosable: false,
        });
    };

    return (
        <HStack as={Center} h="100vh" p="20" spacing="10">
            <VStack h="80%" justify="space-between" align="start">
                <VStack align="start">
                    <Heading as="h2" size="3xl" noOfLines={1}>
                        {APP_NAME}
                    </Heading>

                    <Heading as="h5" size="sm">
                        {t('meetPeople')}
                    </Heading>
                </VStack>

                <AppDemo />

                <VStack align="start">
                    <Heading as="h4" size="md">
                        {t('onlyForMobile')}
                    </Heading>

                    <Heading as="h6" size="xs">
                        {t('noInstallations')}
                    </Heading>

                    <ButtonGroup>
                        <IconButton
                            as={Link}
                            isExternal
                            href={whatsappLink}
                            aria-label={t('sendOnWhatsapp')}
                            size="lg"
                            isRound
                            icon={<Icon as={MdWhatsapp} />}
                        />

                        <IconButton
                            aria-label={t('copyLink')}
                            size="lg"
                            isRound
                            icon={<Icon as={MdLink} />}
                            onClick={onLinkCopyHandler}
                        />
                    </ButtonGroup>
                </VStack>
            </VStack>
            <Lottie animationData={mobileAnimation} loop={true} />;
        </HStack>
    );
}
