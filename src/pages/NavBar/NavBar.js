/* Nav Bar refered from the below site but darkmode toogle button from original chakra site */
/* ref : https://codesandbox.io/p/sandbox/navbar-chakraui-b22b7?file=%2Fsrc%2FApp.js%3A9%2C7-9%2C17 */
import React from "react";
import { Box, Flex, Text, Stack, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as Logo } from "./crown.svg";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { toggleColorMode } = useColorMode();
    const isDarkMode = useColorModeValue(false, true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
            <Logo />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} toggleColorMode={toggleColorMode} isDarkMode={isDarkMode} />
        </NavBarContainer>
    );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

const MenuItem = ({ children, to = "/", ...rest }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <RouterLink to={to}>
            <Text fontSize='2xl' display="block" fontWeight={isActive ? "bold" : "normal"} {...rest}>
                {children}
            </Text>
        </RouterLink>
    );
};

const MenuLinks = ({ isOpen, toggleColorMode, isDarkMode }) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/properties"> Properties </MenuItem>
                <MenuItem to="/contact"> Contact Us </MenuItem>
                <MenuItem to="/about"> About Us </MenuItem>

                <Button onClick={toggleColorMode} leftIcon={isDarkMode ? <MoonIcon w={8} h={8} color="white.500" /> : <SunIcon w={8} h={8} color="yellow.500" />}>
                </Button>
            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
            {...props}
        >
            {children}
        </Flex>
    );
};

export default NavBar;

/* ref : https://codesandbox.io/p/sandbox/navbar-chakraui-b22b7?file=%2Fsrc%2FApp.js%3A9%2C7-9%2C17 */
