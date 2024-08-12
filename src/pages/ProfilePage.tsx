import {
    Avatar,
    VStack,
    ButtonGroup,
    Button,
    Heading,
    IconButton,
    Icon,
} from '@chakra-ui/react';
import { PastActivities } from '../components/PastActivities';
import { ConfirmationDialog as DeleteAccountAction } from '../components/ConfirmationDialog';
import { useTranslation } from 'react-i18next';
import { MdDelete } from 'react-icons/md';

export function ProfilePage() {
    const { t } = useTranslation('translation', { keyPrefix: 'profile' });

    const onDeleteAccountClick = () => {
        console.log('Delete Account');
    };

    return (
        <VStack w="100%" justify="space-between" align="center">
            <VStack>
                <Avatar
                    size="xl"
                    name="Christian Nwamba"
                    src="https://bit.ly/ryan-florence"
                />
                <Heading fontSize="xl">Christian Nwamba</Heading>
            </VStack>

            <VStack>Form</VStack>

            <PastActivities userId="dummy_user_id" />

            <ButtonGroup>
                <Button>Logout</Button>

                <DeleteAccountAction
                    confirmationTitle={t('deleteAccount')}
                    actionInitiator={
                        <Button
                            variant="outline"
                            leftIcon={<Icon as={MdDelete} />}
                        >
                            {t('deleteMyAccount')}
                        </Button>
                    }
                    action={onDeleteAccountClick}
                />
            </ButtonGroup>
        </VStack>
    );
}
