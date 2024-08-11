import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar,
    Button,
    Flex,
    Heading,
    Link,
} from '@chakra-ui/react';
import { MdManageAccounts, MdHelp } from 'react-icons/md';
import { appName } from '../utils/constants';

export function NavMenu() {
    return (
        <Flex w="100%" justify="space-between" mb="4">
            <Heading as="h4" size="md" color="teal">
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
                    <MenuItem as={Link} icon={<MdHelp />} href="/about">
                        About
                    </MenuItem>
                    <MenuItem
                        as={Link}
                        icon={<MdManageAccounts />}
                        href="/profile"
                    >
                        Profile
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
}
