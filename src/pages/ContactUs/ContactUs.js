import React, { useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Alert,
    AlertIcon,
    Checkbox,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Link,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
} from '@chakra-ui/react';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

const EnquiryForm = ({ isSubmitted, setIsSubmitted, isPrivacyModalOpen, setIsPrivacyModalOpen, handlePrivacyModalClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        if (isPrivacyChecked) {
            setTimeout(() => {
                setIsSubmitted(true);
            }, 100);
        } else {
            setIsPrivacyModalOpen(true);
        }
    };

    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

    return (
        <Container maxW="6xl" centerContent mt={10}>
            <Box p={8} borderWidth={1} borderRadius="lg">
                <Heading mb={4}>Enquiry Form</Heading>
                <Text mb={8}>We'd love to hear from you! Please fill out the form below.</Text>

                {isSubmitted && (
                    <Alert status="success" mb={4}>
                        <AlertIcon />
                        Thanks for reaching out! We will contact you soon.
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
                    <FormControl mb={4} id="name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" placeholder="Your Name" />
                    </FormControl>

                    <FormControl mb={4} id="email" isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email" placeholder="Your Email" />
                    </FormControl>

                    <FormControl mb={4} id="message" isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea placeholder="Your Message" />
                    </FormControl>

                    <FormControl mb={4} id="privacy" isRequired>
                        <Checkbox
                            isChecked={isPrivacyChecked}
                            onChange={(e) => setIsPrivacyChecked(e.target.checked)}
                        >
                            I agree to the{' '}
                            <Link onClick={() => setIsPrivacyModalOpen(true)} color="teal.500" cursor="pointer">
                                Privacy Policy
                            </Link>
                        </Checkbox>
                    </FormControl>

                    <Button type="submit" colorScheme="teal">
                        Submit
                    </Button>
                </form>
                <Modal isOpen={isPrivacyModalOpen} onClose={handlePrivacyModalClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Privacy Policy Agreement</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <PrivacyPolicy />
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="teal" onClick={handlePrivacyModalClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Container>
    );
};

const RentalForm = ({ isSubmitted, setIsSubmitted, isPrivacyModalOpen, setIsPrivacyModalOpen, handlePrivacyModalClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        if (isPrivacyChecked) {
            setTimeout(() => {
                setIsSubmitted(true);
            }, 100);
        } else {
            setIsPrivacyModalOpen(true);
        }
    };

    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

    return (
        <Container maxW="6xl" centerContent mt={10}>
            <Box p={8} borderWidth={1} borderRadius="lg">
                <Heading mb={4}>Rental Form</Heading>
                <Text mb={8}>We'd love to hear from you! Please fill out the form below.</Text>

                {isSubmitted && (
                    <Alert status="success" mb={4}>
                        <AlertIcon />
                        Thanks for reaching out! We will contact you soon.
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
                    <FormControl mb={4} id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" placeholder="Your First Name" />
                    </FormControl>

                    <FormControl mb={4} id="lastName" isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" placeholder="Your Last Name" />
                    </FormControl>

                    <FormControl mb={4} id="contactNo" isRequired>
                        <FormLabel>Contact Number</FormLabel>
                        <Input type="tel" placeholder="Your Contact Number" />
                    </FormControl>

                    <FormControl mb={4} id="email" isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email" placeholder="Your Email" />
                    </FormControl>

                    <FormControl mb={4} id="rentalHistory" isRequired>
                        <FormLabel>Rental History</FormLabel>
                        <Textarea placeholder="Enter your rental history here..." />
                    </FormControl>

                    <FormControl mb={4} id="privacy" isRequired>
                        <Checkbox
                            isChecked={isPrivacyChecked}
                            onChange={(e) => setIsPrivacyChecked(e.target.checked)}
                        >
                            I agree to the{' '}
                            <Link onClick={() => setIsPrivacyModalOpen(true)} color="teal.500" cursor="pointer">
                                Privacy Policy
                            </Link>
                        </Checkbox>
                    </FormControl>

                    <Button type="submit" colorScheme="teal">
                        Submit
                    </Button>
                </form>
                <Modal isOpen={isPrivacyModalOpen} onClose={handlePrivacyModalClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Privacy Policy Agreement</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <PrivacyPolicy />
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="teal" onClick={handlePrivacyModalClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Container>
    );
};

const ContactUs = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

    const handlePrivacyModalClose = () => {
        setIsPrivacyModalOpen(false);
    };

    return (
        <Tabs isFitted variant="enclosed">
            <TabList mb="4">
                <Tab>Enquiry Form</Tab>
                <Tab>Rental Form</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <EnquiryForm
                        isSubmitted={isSubmitted}
                        setIsSubmitted={setIsSubmitted}
                        isPrivacyModalOpen={isPrivacyModalOpen}
                        setIsPrivacyModalOpen={setIsPrivacyModalOpen}
                        handlePrivacyModalClose={handlePrivacyModalClose}
                    />
                </TabPanel>
                <TabPanel>
                    <RentalForm
                        isSubmitted={isSubmitted}
                        setIsSubmitted={setIsSubmitted}
                        isPrivacyModalOpen={isPrivacyModalOpen}
                        setIsPrivacyModalOpen={setIsPrivacyModalOpen}
                        handlePrivacyModalClose={handlePrivacyModalClose}
                    />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default ContactUs;
