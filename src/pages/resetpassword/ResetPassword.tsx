import {
  Button,
  Heading,
  Box,
  Icon,
  Text,
  VStack,
  Flex,
  Input,
  FormControl,
  FormLabel,
  useTheme,
  useToast,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { IoPerson } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface ResetPasswordData {
  otp: string;
  password: string;
  confirmPassword: string;
  email_phone: string;
}

const api = axios.create({
  baseURL: "https://membscribe-staging.onrender.com",
});

const resetPassword = async (data: ResetPasswordData): Promise<any> => {
  const payload = {
    otp: data.otp,
    password: data.password,
    email_phone: data.email_phone,
  };
  const response = await api.put("/auth/api/v1/password/reset/", payload);
  return response.data;
};

const ResetPassword: React.FC = () => {
  const theme = useTheme();
  const toast = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ResetPasswordData>({
    otp: "",
    password: "",
    confirmPassword: "",
    email_phone: "",
  });
  const [timer, setTimer] = useState(47);

  useEffect(() => {
    const storedEmail = localStorage.getItem("resetEmail");
    if (storedEmail) {
      setFormData((prev) => ({ ...prev, email_phone: storedEmail }));
    } else {
      toast({
        title: "Email not found",
        description: "Please return to the Forgot Password page.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [toast]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast({
        title: "Password reset successful!",
        description: "You can now log in with your new password.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/sign-in");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Password reset failed.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    mutation.mutate(formData);
  };

  const handleResend = () => {
    setTimer(47);
    toast({
      title: "Verification OTP resent",
      description: "Check your email for a new OTP.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box px={6} pt={6}>
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
      </Heading>

      <VStack align="stretch" spacing={4} mb={6}>
        <Heading size="lg">Reset Password</Heading>
        <Text color="gray.600">
          Please enter the verification code sent to your email
        </Text>
      </VStack>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl id="otp" isRequired>
            <FormLabel>Verification Code</FormLabel>
            <Input
              type="text"
              placeholder="Enter your verification code"
              value={formData.otp}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Enter New Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your new password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="confirmPassword" isRequired>
            <FormLabel>Confirm New Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm your new password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </FormControl>

          <Text fontSize="sm" color="gray.500" align="center">
            Did not get the code?{" "}
            <ChakraLink
              as="button"
              color={theme.colors?.customBlue || "blue.500"}
              onClick={handleResend}
              disabled={timer > 0}
            >
              Resend in {timer > 0 ? `${timer} seconds` : "now"}
            </ChakraLink>
          </Text>
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
            <Button type="submit" colorScheme="purple" width="full" mt={4}>
              Reset Password
            </Button>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
};

export default ResetPassword;
