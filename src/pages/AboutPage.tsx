import { Alert, AlertIcon, Heading, VStack, Text } from '@chakra-ui/react';
import { AppDemo } from '../components/AppDemo';
import { AddToHomeScreenButton } from '../components/AddToHomeScreenButton';

const features = [
    {
        name: 'About',
        description:
            '@@time lets you connect with pepople doing the same activity as you. mark you activity and find users doing the same activity as you at the same time.',
        component: <AppDemo />,
    },
    {
        name: 'Passwordless Login',
        description:
            'Easy sigin with just your email, no need to remember password.',
    },
    {
        name: 'No store installations',
        description:
            'Access on a browser, add to home screen for quick access. No separate installations needed from stores.',
        component: <AddToHomeScreenButton />,
    },
    {
        name: 'Safe data',
        description:
            'Your data is not shared outside the app ecosystem. Delete your account and data anytime from the Profile section',
    },
];

export function AboutPage() {
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
                You might not get users who marked activity in a different
                language. So prefer using English for marking your activity.
            </Alert>
        </VStack>
    );
}
