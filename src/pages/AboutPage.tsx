import { Alert, AlertIcon, Heading, VStack, Text } from '@chakra-ui/react';
import { AppDemo } from '../components/AppDemo';
import { AddToHomeScreenButton } from '../components/AddToHomeScreenButton';
import { useTranslation } from 'react-i18next';

export function AboutPage() {
    const { t } = useTranslation('translation', { keyPrefix: 'aboutPage' });

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
            component: <AddToHomeScreenButton />,
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
