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

export function NavMenu() {
    return (
        <Flex w="100%" justify="space-between">
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
                    <MenuItem icon={<MdHelp />}>About</MenuItem>
                    <MenuItem icon={<MdManageAccounts />}>Profile</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
}
