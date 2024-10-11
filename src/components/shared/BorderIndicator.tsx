import { Box, useTheme } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const BorderIndicator: React.FC<{ path: string }> = ({ path }) => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Box
      height="6px"
      bg={
        location.pathname === path
          ? theme.colors.purpleTextColor
          : "transparent"
      }
      borderRadius="20px"
      transition="background-color 0.3s"
    />
  );
};

export default BorderIndicator;
