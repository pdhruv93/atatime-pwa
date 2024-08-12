import { Heading, Tag, TagLabel, VStack, Wrap, Text } from '@chakra-ui/react';
import { MAX_PAST_ACTIVITIES } from '../utils/constants';
import { useTranslation } from 'react-i18next';

interface PastActivitiesProps {
    userId: string;
}

export function PastActivities({ userId }: PastActivitiesProps) {
    const { t } = useTranslation('translation', {
        keyPrefix: 'recentActivities',
    });
    const pastActivities = [
        'sleeping',
        'reading',
        '@gym',
        '@office',
        '@pub',
        'sleeping',
        'sleeping',
    ];

    return (
        <VStack>
            <Heading fontSize="lg">{t('yourRecentActivities')}:</Heading>

            {pastActivities.length > 0 ? (
                <Wrap justify="center">
                    {pastActivities
                        .slice(0, MAX_PAST_ACTIVITIES)
                        .map((activity, index) => (
                            <Tag
                                key={`past-activity-${index}`}
                                size="md"
                                variant="subtle"
                                colorScheme="teal"
                            >
                                <TagLabel>{activity}</TagLabel>
                            </Tag>
                        ))}
                </Wrap>
            ) : (
                <Text>{t('noActivities')}</Text>
            )}
        </VStack>
    );
}
