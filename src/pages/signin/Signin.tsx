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
  Link as ChakraLink,
  useTheme,
  useToast,
} from "@chakra-ui/react";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import PasswordInput from "../../components/reusable/PasswordInput";

// Define the login data type
interface LoginData {
  email: string;
  method: string;
}

const api = axios.create({
  baseURL: "https://membscribe-staging.onrender.com",
});

const loginUser = async (
  loginData: LoginData & { password: string }
): Promise<any> => {
  const payload = {
    email: loginData.email,
    password: loginData.password,
    method: loginData.method,
  };
  const { data } = await api.post("/auth/api/v1/token/obtain/", payload);
  return data;
};

const SignIn: React.FC = () => {
  const theme = useTheme();
  const toast = useToast();
  const navigate = useNavigate();

  // function to get the email from the localStorage
  const getRegisteredEmail = () => {
    const formData = localStorage.getItem("formData");
    if (formData) {
      const formDataObject = JSON.parse(formData);
      return formDataObject.email || "";
    }
    return "";
  };

  // Initialize login data (exclude password)
  const [loginData, setLoginData] = useState<LoginData>({
    email: getRegisteredEmail(),
    method: "password",
  });
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Mutation for logging in
  const mutation = useMutation({
    mutationFn: loginUser,
    onMutate: () => setLoading(true), // Set loading to true when mutation starts
    onSuccess: () => {
      setLoading(false); // Set loading to false when mutation succeeds
      toast({
        title: "Login successful!",
        description: `Welcome back!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // Clear the formData localStorage after successfully logging in
      localStorage.removeItem("formData");
      navigate("/home");
    },
    onError: (error: any) => {
      setLoading(false); // Set loading to false when mutation fails
      toast({
        title: "Login failed",
        description: error.response?.data?.message || "Unable to log in.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  // Handle input changes for email and password separately
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email") {
      setLoginData((prev) => ({ ...prev, email: value }));
      localStorage.setItem("email", value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ ...loginData, password });
  };

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
          <ChakraLink as={Link} to="/sign-up">
            Sign Up
          </ChakraLink>
        </Button>
      </Heading>

      {/* Intro Text */}
      <VStack align="stretch" spacing={4} mb={6}>
        <Heading size="lg">Welcome Back!</Heading>
        <Text color="gray.600">Login to your account</Text>
      </VStack>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={loginData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <PasswordInput value={password} handleChange={handleChange} />
          </FormControl>

          <ChakraLink
            as={Link}
            to="/forgot-password"
            color={theme.colors?.customBlue || "blue.500"}
            alignSelf="flex-end"
            fontSize="sm"
          >
            Forgot Password?
          </ChakraLink>

          {/* Submit Button with loading spinner */}
          <Button
            type="submit"
            colorScheme="purple"
            width="full"
            mt={4}
            isLoading={loading}
            loadingText="Signing In"
          >
            Sign In
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SignIn;
