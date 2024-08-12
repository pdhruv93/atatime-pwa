import {
    Button,
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    VStack,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { someURLS, dummyUser } from '../../utils/constants';
import { useTranslation } from 'react-i18next';

interface FormInputs {
    name: string;
    fb?: string;
    insta?: string;
    whatsapp?: string;
    radius?: number;
}

export function PersonalDetailsForm() {
    const { t } = useTranslation('translation', {
        keyPrefix: 'personalDetails',
    });
    const defaultValues = {
        name: dummyUser.name,
        fb: dummyUser.fb,
        insta: dummyUser.insta,
        whatsapp: dummyUser.whatsapp,
        radius: dummyUser.radius,
    };
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<FormInputs>({
        defaultValues,
    });
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log('Submit data', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <VStack spacing="4">
                <FormControl isInvalid={!!errors.name}>
                    <InputGroup>
                        <InputLeftAddon>{t('name')}</InputLeftAddon>
                        <Input
                            type="text"
                            placeholder={t('name')}
                            id="name"
                            {...register('name', {
                                required: t('required'),
                            })}
                        />
                    </InputGroup>
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.fb}>
                    <InputGroup>
                        <InputLeftAddon>{someURLS.fb}</InputLeftAddon>
                        <Input
                            type="text"
                            placeholder={t('fbUsername')}
                            id="fb"
                            {...register('fb')}
                        />
                    </InputGroup>
                    <FormErrorMessage>
                        {errors.fb && errors.fb.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.insta}>
                    <InputGroup>
                        <InputLeftAddon>{someURLS.insta}</InputLeftAddon>
                        <Input
                            type="text"
                            placeholder={t('instaHandle')}
                            id="insta"
                            {...register('insta')}
                        />
                    </InputGroup>
                    <FormErrorMessage>
                        {errors.insta && errors.insta.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.whatsapp}>
                    <InputGroup>
                        <InputLeftAddon>{someURLS.whatsapp}</InputLeftAddon>
                        <Input
                            type="text"
                            placeholder={t('whatsappNumber')}
                            id="whatsapp"
                            {...register('whatsapp')}
                        />
                    </InputGroup>
                    <FormErrorMessage>
                        {errors.whatsapp && errors.whatsapp.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.radius}>
                    <InputGroup>
                        <InputLeftAddon>{t('showUsersWithin')}</InputLeftAddon>
                        <Input
                            type="number"
                            placeholder={t('connectUsersWithinRadius')}
                            id="radius"
                            {...register('radius')}
                        />
                        <InputRightAddon>km</InputRightAddon>
                    </InputGroup>

                    <FormErrorMessage>
                        {errors.radius && errors.radius.message}
                    </FormErrorMessage>
                </FormControl>

                <Button
                    colorScheme="teal"
                    isLoading={isSubmitting}
                    type="submit"
                >
                    {t('update')}
                </Button>
            </VStack>
        </form>
    );
}
