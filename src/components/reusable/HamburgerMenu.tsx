import React from "react";
import { IconButton, useTheme } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

interface HamburgerMenuProps {
  onClick: () => void; // Function to handle the click event
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
  const theme = useTheme();

  return (
    <IconButton
      icon={<FaBars />}
      aria-label="Open Menu"
      position="absolute"
      fontSize={theme.fontSizes.xl}
      top={4}
      left={4}
      bg={theme.colors.hamburgerMenuBgColor}
      color={theme.colors.topNavIconsColor}
      _hover={{
        bg: "white",
        boxShadow: "md",
      }}
      borderRadius={theme.borderRadius.lg}
      size="lg"
      onClick={onClick}
    />
  );
};

export default HamburgerMenu;
