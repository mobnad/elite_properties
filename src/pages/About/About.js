import React from 'react';
import { Box, Container, Heading, Text, Flex, Image } from '@chakra-ui/react';
import LondonImage from './london.jpg';

const About = () => {
    return (
        <Container maxW="6xl" centerContent mt={10}>
            <Box p={8} borderWidth={1} borderRadius="lg" textAlign="center">
                <Heading mb={4}>About Elite Properties</Heading>
                <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" mb={6}>
                    <Box flex={{ base: '1', md: '1' }} mb={{ base: 6, md: 0 }}>
                        <Image src={LondonImage} alt="Elite Properties" borderRadius="lg" />
                    </Box>
                    <Box ml={{ md: 6 }} flex={{ base: '1', md: '1' }}>
                        <Text fontSize="lg">
                            Welcome to Elite Properties, your premier destination for high-quality rental properties in London.
                            We understand the importance of finding the perfect home, and our mission is to make your search for rental properties as seamless and enjoyable as possible.
                        </Text>
                        <Text fontSize="lg" mb={6}>
                            Whether you're looking for a cozy apartment, a stylish townhouse, or a spacious family home, Elite Properties has a diverse range of rental options to suit your needs. Our properties are located in prime neighborhoods, offering convenience and comfort to our residents.
                        </Text>
                        <Text fontSize="lg" mb={6}>
                            Explore our listings, and let us help you find your ideal rental property in the heart of London. Contact us today to start your journey to a new and exciting living experience!
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Container>
    );
};

export default About;
