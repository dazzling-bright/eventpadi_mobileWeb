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
} from "@chakra-ui/react";
import { IoPerson } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import PasswordInput from "../../components/reusable/PasswordInput";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  communities: null;
  is_password: boolean;
}

const api = axios.create({
  baseURL: "https://membscribe-staging.onrender.com",
});

const registerUser = async (
  userData: UserData & { password: string }
): Promise<any> => {
  const payload = {
    first_name: userData.firstName,
    last_name: userData.lastName,
    email: userData.email,
    phone: userData.phone,
    password: userData.password,
    communities: userData.communities,
    is_password: userData.is_password,
  };
  const { data } = await api.post("/auth/api/v1/register/", payload);
  return data;
};

const SignUp: React.FC = () => {
  const theme = useTheme();
  const toast = useToast();
  const navigate = useNavigate();

  // Initialize form data state (exclude password and confirm password from localStorage)
  const [formData, setFormData] = useState<UserData>(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          communities: null,
          is_password: false,
        };
  });

  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false); // state to handle loading spinner
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  // Save form data to localStorage on change (excluding password and confirmPassword)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    // Create an updated form data object excluding password and confirmPassword
    const updatedFormData = { ...formData, [id]: value };

    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  // Handle password input change
  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setPassword(value);
  };

  // Handle confirm password field change
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordMatch(value === password); // Check if confirmPassword matches password
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Prepare the form data for submission
    const userData: UserData & { password: string } = {
      ...formData,
      password: password,
    };
    mutation.mutate(userData);
  };

  // Utility function to handle API errors and generate user-friendly messages
  const handleErrorResponse = (error: any) => {
    let errorMessage = "Registration failed";

    // Handle error response using optional chaining
    errorMessage = error?.response?.data?.errors?.email?.[0]
      ? `he email address must be unique. ${error.response.data.errors.email}`
      : error?.response?.data?.message || errorMessage; //  default message

    return errorMessage;
  };

  // Mutation for registering user
  const mutation = useMutation({
    mutationFn: registerUser,

    onMutate: () => setIsLoading(true),
    onSuccess: ({ data }) => {
      const userName = data?.first_name || "User";
      setIsLoading(false);
      toast({
        title: "Registration successful!",
        description: `Welcome, ${userName}!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/sign-in");
    },
    onError: (error: Error) => {
      setIsLoading(false);
      const errorMessage = handleErrorResponse(error);
      toast({
        title: "Error",
        description: errorMessage || "Registration failed",
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
            <PasswordInput
              value={password}
              handleChange={handlePasswordInputChange}
            />
          </FormControl>

          {/* Confirm Password */}
          <FormControl id="confirmPassword" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <PasswordInput
              value={confirmPassword}
              handleChange={handleConfirmPasswordChange}
            />
            {!passwordMatch && (
              <Text color="red.500" fontSize="sm">
                Passwords do not match.
              </Text>
            )}
          </FormControl>

          {/* Terms and Conditions */}
          <Checkbox colorScheme="purple" color="gray.600" isRequired>
            By signing up, you acknowledge and accept our terms and conditions.
            <ChakraLink
              color={theme.colors?.customBlue || "blue.500"}
              href="/terms"
              isExternal
            >
              View Terms and Conditions
            </ChakraLink>
          </Checkbox>

          {/* Submit Button */}
          <Button
            type="submit"
            colorScheme="purple"
            width="full"
            mt={4}
            isLoading={loading}
            isDisabled={!passwordMatch}
          >
            Next
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SignUp;
