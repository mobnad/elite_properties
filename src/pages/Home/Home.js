import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    SimpleGrid,
    Box,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    Button,
    Center
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [propertyData, setPropertyData] = useState({
        cheapest: [],
        christmas_deals: [],
        luxury: [],
    });
    console.log(propertyData)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://gist.githubusercontent.com/mobnad/7b4918ef1155376165148dc687149c76/raw/69dbf4bdf2bae72a23d9ea816c1f756baeac1d65/home_properties.json'
                );
                setPropertyData(response.data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Center>
        <div>
            <section>
                <Heading as="h2" size="lg" mb="4">
                    Cheapest Properties
                </Heading>
                {propertyData.cheapest && propertyData.cheapest.length > 0 ? (
                    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing='4'>
                        {propertyData.cheapest.map((property, index) => (
                            <Box key={index}>
                                <Card maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src={property.image_link}
                                            alt={`Property ${index}`}
                                            borderRadius='lg'
                                            height={'225px'}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{property.listing_title}</Heading>
                                            <Text>{property.location}</Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                {property.listing_price_perweek}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                        height='60px'
                                    >
                                        <Link to={`/properties/${property.id}`}>
                                            <Button variant='solid' colorScheme='blue'>
                                                View details
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </Box>
                        ))}
                    </SimpleGrid>
                ) : (
                    <p>No cheapest properties available.</p>
                )}
            </section>

            <section>
                <Heading as="h2" size="lg" my="4">
                    Christmas Deals
                </Heading>
                {propertyData.christmas_deals && propertyData.christmas_deals.length > 0 ? (
                    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing='4'>
                        {propertyData.christmas_deals.map((property, index) => (
                            <Box key={index}>
                                <Card maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src={property.image_link}
                                            alt={`Property ${index}`}
                                            borderRadius='lg'
                                            height={'225px'}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{property.listing_title}</Heading>
                                            <Text>{property.location}</Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                {property.listing_price_perweek}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                        height='60px'
                                    >
                                        <Link to={`/properties/${property.id}`}>
                                            <Button variant='solid' colorScheme='blue'>
                                                View details
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </Box>
                        ))}
                    </SimpleGrid>
                ) : (
                    <p>No Christmas deals available.</p>
                )}
            </section>

            <section>
                <Heading as="h2" size="lg" my="4">
                    Luxury Properties
                </Heading>
                {propertyData.luxury && propertyData.luxury.length > 0 ? (
                    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing='4'>
                        {propertyData.luxury.map((property, index) => (
                            <Box key={index}>
                                <Card maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src={property.image_link}
                                            alt={`Property ${index}`}
                                            borderRadius='lg'
                                            height={'225px'}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{property.listing_title}</Heading>
                                            <Text>{property.location}</Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                {property.listing_price_perweek}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                        height='60px'
                                    >
                                        <Link to={`/properties/${property.id}`}>
                                            <Button variant='solid' colorScheme='blue'>
                                                View details
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </Box>
                        ))}
                    </SimpleGrid>
                ) : (
                    <p>No luxury properties available.</p>
                )}
            </section>
        </div>
        </Center>
    );
};

export default Home;
