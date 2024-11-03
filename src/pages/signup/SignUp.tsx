import {
  Button,
  Heading,
  Box,
  Icon,
  Text,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Checkbox,
  Link as ChakraLink,
  useTheme,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { IoPerson } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  communities: null;
  is_password: boolean;
}

const api = axios.create({
  baseURL: "https://membscribe-staging.onrender.com/auth/api/v1/",
});

const registerUser = async (userData: UserData): Promise<any> => {
  const payload = {
    first_name: userData.firstName,
    last_name: userData.lastName,
    email: userData.email,
    phone: userData.phone,
    password: userData.password,
    communities: userData.communities,
    is_password: userData.is_password,
  };
  const { data } = await api.post("register/", payload);
  return data;
};

const SignUp: React.FC = () => {
  const theme = useTheme();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Initialize form data state
  const [formData, setFormData] = useState<UserData>(() => {
    // Load initial data from localStorage if available
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          communities: null,
          is_password: false,
        };
  });

  // Save form data to localStorage on change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const updatedFormData = { ...formData, [id]: value };
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData)); // Save to localStorage
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  // Mutation for registering user
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: ({ data }) => {
      const userName = data?.first_name || "User";
      toast({
        title: "Registration successful!",
        description: `Welcome, ${userName}!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Clear localStorage on success
      localStorage.removeItem("formData");

      onOpen(); // Open the modal when registration is successful
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Registration failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  return (
    <Box px={6} pt={6}>
      {/* Header with Icon and Title */}
      <Heading
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <Box display="flex" alignItems="center">
          <Icon
            as={IoPerson}
            boxSize={16}
            cursor="pointer"
            p={4}
            borderRadius="full"
            bg={theme.colors?.hamburgerMenuBgColor || "gray.100"}
            color={theme.colors?.purpleTextColor || "purple.500"}
            _hover={{ color: "gray.500" }}
            transition="color 300ms ease-in-out"
          />
          <Text
            as="span"
            fontSize={theme.fontSizes?.xl || "2xl"}
            color={theme.colors?.purpleTextColor || "purple.500"}
            mx={2}
          >
            eventpadi
          </Text>
        </Box>
        <Button
          colorScheme="white"
          fontSize={theme.fontSizes?.xl || "lg"}
          border="1px"
          borderColor={theme.colors?.primaryBorderColor || "gray.200"}
          borderRadius="full"
          color={theme.colors?.customBlue || "blue.500"}
          cursor="pointer"
          py={2}
          px={6}
          transition="all 0.3s ease"
          _hover={{
            bg: theme.colors?.customBlue || "blue.500",
            color: "white",
            borderColor: "transparent",
          }}
        >
          <ChakraLink as={Link} to="/sign-in">
            Sign In
          </ChakraLink>
        </Button>
      </Heading>

      {/* Intro Text */}
      <VStack align="stretch" spacing={4} mb={6}>
        <Heading size="lg">Get started with Eventpadi</Heading>
        <Text color="gray.600">
          All-in-one event management software to plan and run in-person,
          virtual, and hybrid events with greater efficiency and impact.
        </Text>
      </VStack>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="lastName" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormControl>

          {/* Terms and Conditions */}
          <Checkbox
            colorScheme="purple"
            color="gray.600"
            isChecked={formData.is_password}
            onChange={(e) =>
              setFormData({ ...formData, is_password: e.target.checked })
            }
            isRequired
          >
            By signing in, you acknowledge and accept our terms and conditions.
            <ChakraLink
              color={theme.colors?.customBlue || "blue.500"}
              href="/terms"
              isExternal
            >
              View Terms and Conditions
            </ChakraLink>
          </Checkbox>

          {/* Submit Button */}
          <Button type="submit" colorScheme="purple" width="full" mt={4}>
            Next
          </Button>
        </VStack>
      </form>

      {/* Success Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registration Successful</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Thank you for signing up! Welcome to Eventpadi.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SignUp;
