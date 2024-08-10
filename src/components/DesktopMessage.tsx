import {
    ButtonGroup,
    Center,
    Heading,
    HStack,
    Icon,
    IconButton,
    VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { appName } from '../utils/constants';
import Lottie from 'lottie-react';
import mobileAnimation from '../lottie/mobile.json';
import { MdLink, MdWhatsapp } from 'react-icons/md';

export function DesktopMessage() {
    const { t } = useTranslation('homepage');

    return (
        <HStack as={Center} h="100vh" p="20" spacing="10">
            <VStack h="50%" justify="space-between" align="start">
                <VStack align="start">
                    <Heading as="h2" size="3xl" noOfLines={1}>
                        {appName}
                    </Heading>

                    <Heading as="h5" size="sm">
                        meet people with common interests
                    </Heading>
                </VStack>

                <VStack align="start">
                    <Heading as="h4" size="md">
                        we are only available on mobile devices
                    </Heading>

                    <Heading as="h6" size="xs">
                        no installations needed, passwordless logins
                    </Heading>

                    <ButtonGroup>
                        <IconButton
                            aria-label="Send on Whatsapp"
                            size="lg"
                            isRound
                            icon={<Icon as={MdWhatsapp} />}
                        />
                        <IconButton
                            aria-label="Copy Link"
                            size="lg"
                            isRound
                            icon={<Icon as={MdLink} />}
                        />
                    </ButtonGroup>
                </VStack>
            </VStack>
            <Lottie animationData={mobileAnimation} loop={true} />;
        </HStack>
    );
}
