import {
  Button,
  Heading,
  Box,
  Icon,
  Text,
  Link as ChakraLink,
  VStack,
  Input,
  FormControl,
  FormLabel,
  useTheme,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: "https://membscribe-staging.onrender.com/auth/api/v1/",
});

const retrievePassword = async (email: string): Promise<any> => {
  const { data } = await api.post("otp/", { email, type: "password_reset" });
  return data;
};

const ForgotPassword: React.FC = () => {
  const theme = useTheme();
  const toast = useToast();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on form submission
    try {
      localStorage.setItem("resetEmail", email);
      await retrievePassword(email);
      toast({
        title: "Password reset email sent!",
        description: "Check your email to reset your password.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/reset-password");
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error.response?.data?.message || "Could not send reset email.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false); // Set loading to false after API call completes
    }
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
          <ChakraLink as={Link} to="/sign-in">
            Sign In
          </ChakraLink>
        </Button>
      </Heading>

      {/* Intro Text */}
      <VStack align="stretch" spacing={4} mb={6}>
        <Heading size="lg">Retrieve Password</Heading>
        <Text color="gray.600">Kindly provide your email address</Text>
      </VStack>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          {/* Button Group */}
          <Flex gap={6}>
            <Button
              colorScheme="white"
              width="full"
              mt={4}
              textColor="purple"
              border="2px"
              borderColor="purple"
              onClick={() => navigate(-1)}
            >
              Previous
            </Button>
            <Button
              colorScheme="purple"
              width="full"
              mt={4}
              type="submit"
              isLoading={loading} 
              loadingText="Sending..."
            >
              Next
            </Button>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
};

export default ForgotPassword;
