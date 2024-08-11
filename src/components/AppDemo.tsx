import { VStack, AvatarGroup, Avatar, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

type Sequence = (string | number)[];

const activities = ['singing', 'cooking', '@gym', '@beach'];
const delay = 2000;

const dummyUsers = [
    {
        name: 'Ryan Florence',
        profileURL: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Kent Dodds',
        profileURL: 'https://bit.ly/kent-c-dodds',
    },
    {
        name: 'Ryan Florence',
        profileURL: 'https://bit.ly/ryan-florence',
    },
];

export function AppDemo() {
    const { t } = useTranslation('translation', { keyPrefix: 'appDemo' });
    const animationSequence: Sequence = [];
    activities.forEach((activity) => {
        animationSequence.push(t('activityDemo', { activity }));
        animationSequence.push(delay);
    });

    return (
        <VStack align="start">
            <TypeAnimation
                sequence={animationSequence}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />

            <AvatarGroup size="md" max={2}>
                {dummyUsers.map((user, index) => (
                    <Avatar
                        key={`dummy-user-avatar-${index}`}
                        name={user.name}
                        src={user.profileURL}
                    />
                ))}
            </AvatarGroup>

            <Text>{t('usersNearYou')}</Text>
        </VStack>
    );
}
