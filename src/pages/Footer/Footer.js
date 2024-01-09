import React from 'react';
import { Box, Text, Link, Flex, IconButton } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box as='footer' mt='8'>
            <Flex align='center' justify='space-between' direction='column' textAlign='center'>
                <Text fontSize='sm'>
                    © {new Date().getFullYear()} Elite Properties. All rights reserved.
                </Text>
                <Flex mt='2' justify='center' align='center'>
                    <Link href='https://github.com/' isExternal>
                        <IconButton
                            aria-label='GitHub'
                            icon={<FaGithub />}
                            variant='ghost'
                            color='gray.600'
                            fontSize='20px'
                            mr='2'
                        />
                    </Link>
                    <Link href='https://twitter.com/' isExternal>
                        <IconButton
                            aria-label='Twitter'
                            icon={<FaTwitter />}
                            variant='ghost'
                            color='gray.600'
                            fontSize='20px'
                            mr='2'
                        />
                    </Link>
                    <Link href='https://www.linkedin.com/' isExternal>
                        <IconButton
                            aria-label='LinkedIn'
                            icon={<FaLinkedin />}
                            variant='ghost'
                            color='gray.600'
                            fontSize='20px'
                        />
                    </Link>
                    <Link href='https://facebook.com/' isExternal>
                        <IconButton
                            aria-label='Facebook'
                            icon={<FaFacebook />}
                            variant='ghost'
                            color='gray.600'
                            fontSize='20px'
                            mr='2'
                        />
                    </Link>
                    <Link href='https://instagram.com/' isExternal>
                        <IconButton
                            aria-label='Instagram'
                            icon={<FaInstagram />}
                            variant='ghost'
                            color='gray.600'
                            fontSize='20px'
                            mr='2'
                        />
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
