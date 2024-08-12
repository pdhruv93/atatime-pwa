import {
    Button,
    FormControl,
    FormErrorMessage,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    VStack,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { dummyUser } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import { MdOutlineAccountCircle, MdFacebook, MdWhatsapp } from 'react-icons/md';
import { FiInstagram } from 'react-icons/fi';

interface FormInputs {
    name: string;
    fb?: string;
    insta?: string;
    whatsapp?: string;
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
                        <InputLeftElement pointerEvents="none">
                            <Icon as={MdOutlineAccountCircle} />
                        </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="Your name"
                            id="name"
                            {...register('name', {
                                required: 'This is required',
                            })}
                        />
                    </InputGroup>
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.fb}>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={MdFacebook} />
                        </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="FB username"
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
                        <InputLeftElement pointerEvents="none">
                            <Icon as={FiInstagram} />
                        </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="Insta handle"
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
                        <InputLeftElement pointerEvents="none">
                            <Icon as={MdWhatsapp} />
                        </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="Whatsapp No.(+23XXXX)"
                            id="whatsapp"
                            {...register('whatsapp')}
                        />
                    </InputGroup>
                    <FormErrorMessage>
                        {errors.whatsapp && errors.whatsapp.message}
                    </FormErrorMessage>
                </FormControl>

                <Button variant="solid" isLoading={isSubmitting} type="submit">
                    Update
                </Button>
            </VStack>
        </form>
    );
}

export default PersonalDetailsForm;
