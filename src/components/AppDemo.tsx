import { VStack, AvatarGroup, Avatar, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

const delay = 2000;
const animationSequence = [
    'singing',
    delay,
    'cooking',
    delay,
    '@gym',
    delay,
    '@beach',
    delay,
];

const dummyUsers = [
    {
        name: 'Ryan Florence',
        profileURL: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Segun Adebayo',
        profileURL: 'https://bit.ly/sage-adebayo',
    },
    {
        name: 'Kent Dodds',
        profileURL: 'https://bit.ly/kent-c-dodds',
    },
];

export function AppDemo() {
    const { t } = useTranslation('translation');

    return (
        <VStack align="start">
            <TypeAnimation
                sequence={animationSequence}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
            <Text>{t('commons.ok')},</Text>

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
