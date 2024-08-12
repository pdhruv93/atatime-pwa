import { Heading, Tag, TagLabel, VStack, Wrap, Text } from '@chakra-ui/react';
import { dummyUser, MAX_PAST_ACTIVITIES } from '../../utils/constants';
import { useTranslation } from 'react-i18next';

export function FavoriteActivities() {
    const { t } = useTranslation('translation', {
        keyPrefix: 'favoriteActivities',
    });
    const favActivities = dummyUser.favActivities;

    return (
        <VStack>
            <Heading fontSize="lg">{t('yourFavActivities')}:</Heading>

            {favActivities.length > 0 ? (
                <Wrap justify="center">
                    {favActivities
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
