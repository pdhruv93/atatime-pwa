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
import { MdManageAccounts, MdHelp } from 'react-icons/md';
import { appName } from '../utils/constants';
import { Link as ReactRouterLink } from 'react-router-dom';

export function NavMenu() {
    return (
        <Flex w="100%" justify="space-between" mb="4">
            <Heading as={ReactRouterLink} fontSize="xl" color="teal" to="/">
                {appName}
            </Heading>

            <Menu isLazy>
                <MenuButton
                    as={Button}
                    rounded="full"
                    variant="link"
                    cursor="pointer"
                    minW={0}
                >
                    <Avatar size="sm" src={'https://bit.ly/ryan-florence'} />
                </MenuButton>

                <MenuList>
                    <MenuItem
                        as={ReactRouterLink}
                        icon={<MdHelp />}
                        to="/about"
                    >
                        About
                    </MenuItem>

                    <MenuItem
                        as={ReactRouterLink}
                        icon={<MdManageAccounts />}
                        to="/profile"
                    >
                        Profile
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
}
