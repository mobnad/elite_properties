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
} from '@chakra-ui/react';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

const ContactUs = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

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

    const handlePrivacyModalClose = () => {
        setIsPrivacyModalOpen(false);
    };

    return (
        <Container maxW="6xl" centerContent mt={10}>
            <Box p={8} borderWidth={1} borderRadius="lg">
                <Heading mb={4}>Contact Us</Heading>
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
                            I agree to the <Link onClick={() => setIsPrivacyModalOpen(true)} color="teal.500" cursor="pointer">
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

export default ContactUs;
