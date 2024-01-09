import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Link, VStack, Spinner, Image, HStack, Center } from '@chakra-ui/react';
import axios from 'axios';

export default function PropertiesDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/mobnad/88c9d7137e06bcae1134d691462c3278/raw/ec832661ddc9e12ec3ae962326fe291f6c93a5d2/properties.json')
      .then((response) => {
        const selectedProperty = response.data.find((property) => property.id === parseInt(id, 10));
        setProperty(selectedProperty);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Center>
      <Box p={8}>
        {property ? (
          <HStack spacing={8} align="stretch">

            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt=''
              borderRadius='lg'
              boxSize="300px"
            />

            <VStack spacing={4} align="stretch" flex="1">
              <Heading>{property.listing_title}</Heading>
              <Text fontSize="lg">Price per month: {property.listing_price_pcm}</Text>
              <Text fontSize="lg">Price per week: {property.listing_price_perweek}</Text>
              <Text fontSize="lg">Bedrooms: {property.bedroom}</Text>
              <Text fontSize="lg">Bathrooms: {property.bathroom}</Text>
              <Text fontSize="lg">Living rooms: {property.livingroom}</Text>
              <Text fontSize="lg">Location: {property.location}</Text>
              <Text fontSize="lg">Nearby stations: {property.nearby_stations}</Text>
              <Text fontSize="lg">Listed: {property.listed}</Text>
              <Text fontSize="lg">Agent: {property.agent}</Text>
              {property.available && (
                <Text fontSize="lg">Available: {property.available}</Text>
              )}
              <Link href={property.listing_link} color="teal.500" isExternal>
                View on Zoopla
              </Link>
            </VStack>
          </HStack>
        ) : (
          <Spinner size="xl" />
        )}
      </Box>
    </Center>
  );
}
