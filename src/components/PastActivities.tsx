import { Heading, VStack } from '@chakra-ui/react';

interface PastActivitiesProps {
    userId: string;
}

export function PastActivities({ userId }: PastActivitiesProps) {
    return (
        <VStack>
            <Heading fontSize="lg">Your recent activities:</Heading>
        </VStack>
    );
}
