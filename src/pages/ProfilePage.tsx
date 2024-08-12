import { VStack, ButtonGroup, Button, Icon } from '@chakra-ui/react';
import { ConfirmationDialog as DeleteAccountAction } from '../components/ConfirmationDialog';
import { useTranslation } from 'react-i18next';
import { MdDelete } from 'react-icons/md';
import {
    FavoriteActivities,
    PersonalDetailsForm,
    ProfileImage,
} from '../components/profile-details';

export function ProfilePage() {
    const { t } = useTranslation('translation', { keyPrefix: 'profile' });

    const onDeleteAccountClick = () => {
        console.log('Delete Account');
    };

    return (
        <VStack w="100%" h="100%" justify="space-between" align="center">
            <ProfileImage />
            <FavoriteActivities />
            <PersonalDetailsForm />

            <ButtonGroup>
                <Button>{t('logout')}</Button>

                <DeleteAccountAction
                    confirmationTitle={t('deleteAccount')}
                    actionInitiator={
                        <Button
                            variant="outline"
                            leftIcon={<Icon as={MdDelete} />}
                            color="red.300"
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
