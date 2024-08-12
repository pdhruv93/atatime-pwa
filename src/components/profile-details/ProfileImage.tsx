import { Avatar, Heading, VStack } from '@chakra-ui/react';
import { dummyUser } from '../../utils/constants';

export function ProfileImage() {
    return (
        <VStack>
            <Avatar
                size="xl"
                name={dummyUser.name}
                src={dummyUser.profileURL}
            />

            <Heading fontSize="xl">{dummyUser.name}</Heading>
        </VStack>
    );
}
