import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

// Define prop types for the PasswordInput component
interface PasswordInputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Password Input Field
function PasswordInput({ value, handleChange }: PasswordInputProps) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        type={show ? "text" : "password"}
        placeholder="Enter password"
        onChange={handleChange}
        value={value}
      />
      <InputRightElement>
        <Button bg="transparent" size="xs" onClick={handleClick}>
          {show ? <IoEyeOff /> : <IoEye />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
