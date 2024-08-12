import {
    Alert,
    AlertIcon,
    Heading,
    VStack,
    Text,
    Button,
    Icon,
} from '@chakra-ui/react';
import { AppDemo } from '../components/AppDemo';
import { useTranslation } from 'react-i18next';
import { useAddToHomeScreenPrompt } from '../hooks/useAddToHomeScreenPrompt';
import { MdAdd } from 'react-icons/md';

export function AboutPage() {
    const { t } = useTranslation('translation', { keyPrefix: 'aboutPage' });
    const { prompt, promptToInstall } = useAddToHomeScreenPrompt();

    const features = [
        {
            name: t('about'),
            description: t('aboutApp'),
            component: <AppDemo />,
        },
        {
            name: t('passwordless'),
            description: t('easySignin'),
        },
        {
            name: t('noInstallations'),
            description: t('accessOnBrowser'),
            component: prompt ? (
                <Button
                    leftIcon={<Icon as={MdAdd} />}
                    onClick={promptToInstall}
                >
                    {t('addToHomeScreen')}
                </Button>
            ) : null,
        },
        {
            name: t('safeData'),
            description: t('privacy'),
        },
    ];

    return (
        <VStack my="10" spacing="10">
            {features.map((feature, index) => (
                <VStack key={`feature-${index}`} align="start">
                    <Heading as="h4" size="md" color="teal">
                        {feature.name}
                    </Heading>
                    <Text>{feature.description}</Text>
                    {feature.component}
                </VStack>
            ))}

            <Alert status="info">
                <AlertIcon />
                {t('languageAlert')}
            </Alert>
        </VStack>
    );
}
