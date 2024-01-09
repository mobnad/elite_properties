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
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
    Select,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import ReactPaginate from 'react-paginate';
import './Properties.css';
import { Link } from 'react-router-dom';


const Properties = () => {
    const [propertyData, setPropertyData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBedrooms, setSelectedBedrooms] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://gist.githubusercontent.com/mobnad/88c9d7137e06bcae1134d691462c3278/raw/ec832661ddc9e12ec3ae962326fe291f6c93a5d2/properties.json'
                );
                setPropertyData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(0);
    };

    const handleBedroomsChange = (event) => {
        setSelectedBedrooms(event.target.value === '' ? '' : parseInt(event.target.value, 10));
        setCurrentPage(0);
    };

    const filteredProperties = propertyData.filter(
        (property) =>
            property.location.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedBedrooms === '' || property.bedroom === selectedBedrooms)
    );

    const pageCount = Math.ceil(filteredProperties.length / itemsPerPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProperties = filteredProperties.slice(startIndex, endIndex);

    const bedroomOptions = [1, 2, 3, 0]; // 0 represents 'studio'

    return (
        <div>
            <InputGroup mb='4'>
                <InputLeftElement
                    pointerEvents='none'
                    children={<Icon as={SearchIcon} color='gray.300' />}
                />
                <Input
                    placeholder='Search by location...'
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </InputGroup>

            <Select
                placeholder='Filter by Bedrooms'
                value={selectedBedrooms}
                onChange={handleBedroomsChange}
                mb='4'
            >
                {bedroomOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option === 0 ? 'Studio' : `${option} Bed`}
                    </option>
                ))}
            </Select>

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing='4'>
                {currentProperties.map((property, index) => (
                    <Box key={index}>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                    alt={`Property ${index}`}
                                    borderRadius='lg'
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

            <ReactPaginate
                breakLabel='...'
                nextLabel='next >'
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel='< previous'
                marginPagesDisplayed={2}
                containerClassName='pagination'
                subContainerClassName='pages pagination'
                activeClassName='active'
            />
        </div>
    );
};

export default Properties;