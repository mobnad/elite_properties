import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

const PrivacyPolicy = () => {
    return (
        <Box p={8}>
            <Heading mb={4}>Privacy Policy</Heading>
            <Text>Last updated: January 09, 2024</Text>

            <Text mt={4}>
                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure
                of Your information when You use the Service and tells You about Your privacy rights and how the
                law protects You. We use Your Personal data to provide and improve the Service.
            </Text>

            <Text mt={4}>
                By using the Service, You agree to the collection and use of information in accordance with this
                Privacy Policy. This Privacy Policy has been created with the help of the{' '}
                <Link href="https://www.termsfeed.com/privacy-policy-generator/" color="teal.500" isExternal>
                    Privacy Policy Generator
                </Link>
                .
            </Text>

            <Heading mt={6} mb={4} size="lg">
                Interpretation and Definitions
            </Heading>
            <Text>
                The words of which the initial letter is capitalized have meanings defined under the following
                conditions. The following definitions shall have the same meaning regardless of whether they
                appear in singular or in plural.
            </Text>



            <Heading mt={6} mb={4} size="lg">
                Collecting and Using Your Personal Data
            </Heading>
            <Text>
                The Company may use Personal Data for the following purposes:
            </Text>



            <Heading mt={6} mb={4} size="lg">
                Retention of Your Personal Data
            </Heading>
            <Text>
                The Company will retain Your Personal Data only for as long as is necessary for the purposes
                set out in this Privacy Policy.
            </Text>



            <Heading mt={6} mb={4} size="lg">
                Transfer of Your Personal Data
            </Heading>
            <Text>
                Your information, including Personal Data, is processed at the Company's operating offices and
                in any other places where the parties involved in the processing are located.
            </Text>



            <Heading mt={6} mb={4} size="lg">
                Delete Your Personal Data
            </Heading>
            <Text>
                You have the right to delete or request that We assist in deleting the Personal Data that We
                have collected about You.
            </Text>



            <Heading mt={6} mb={4} size="lg">
                Disclosure of Your Personal Data
            </Heading>
            <Text>The Company may disclose Your Personal Data in the following situations:</Text>



            <Heading mt={6} mb={4} size="lg">
                Security of Your Personal Data
            </Heading>
            <Text>
                The security of Your Personal Data is important to Us, but remember that no method of
                transmission over the Internet, or method of electronic storage is 100% secure.
            </Text>



            <Heading mt={6} mb={4} size="lg">
                Children's Privacy
            </Heading>
            <Text>Our Service does not address anyone under the age of 13.</Text>



            <Heading mt={6} mb={4} size="lg">
                Links to Other Websites
            </Heading>
            <Text>
                Our Service may contain links to other websites that are not operated by Us. If You click on a
                third party link, You will be directed to that third party's site.
            </Text>



            <Heading mt={6} mb={4} size="lg">
                Changes to this Privacy Policy
            </Heading>
            <Text>We may update Our Privacy Policy from time to time.</Text>


            <Heading mt={6} mb={4} size="lg">
                Contact Us
            </Heading>
            <Text>If you have any questions about this Privacy Policy, You can contact us:</Text>
            <ul>
                <li>By email: noreply@eliteproperty.com</li>
            </ul>
        </Box>
    );
};

export default PrivacyPolicy;
