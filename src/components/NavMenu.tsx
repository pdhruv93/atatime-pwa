import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar,
    Button,
    Flex,
    Heading,
} from '@chakra-ui/react';
import { MdManageAccounts, MdHelp, MdAdd } from 'react-icons/md';
import { APP_NAME } from '../utils/constants';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAddToHomeScreenPrompt } from '../hooks/useAddToHomeScreenPrompt';

export function NavMenu() {
    const { t } = useTranslation('translation', { keyPrefix: 'navMenu' });
    const { prompt, promptToInstall } = useAddToHomeScreenPrompt();

    return (
        <Flex w="100%" justify="space-between" mb="4">
            <Heading as={ReactRouterLink} fontSize="xl" color="teal" to="/">
                {APP_NAME}
            </Heading>

            <Menu isLazy>
                <MenuButton
                    as={Button}
                    rounded="full"
                    variant="link"
                    cursor="pointer"
                    minW={0}
                >
                    <Avatar size="sm" src="https://bit.ly/ryan-florence" />
                </MenuButton>

                <MenuList>
                    <MenuItem
                        as={ReactRouterLink}
                        icon={<MdHelp />}
                        to="/about"
                    >
                        {t('about')}
                    </MenuItem>

                    <MenuItem
                        as={ReactRouterLink}
                        icon={<MdManageAccounts />}
                        to="/profile"
                    >
                        {t('profile')}
                    </MenuItem>

                    {prompt ? (
                        <MenuItem icon={<MdAdd />} onClick={promptToInstall}>
                            {t('addToHomeScreen')}
                        </MenuItem>
                    ) : null}
                </MenuList>
            </Menu>
        </Flex>
    );
}
