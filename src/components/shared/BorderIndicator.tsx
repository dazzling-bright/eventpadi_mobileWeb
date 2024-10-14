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
      opacity={location.pathname === path ? 1 : 0}
      borderRadius="20px"
      transition="all 500ms ease-in-out"
    />
  );
};

export default BorderIndicator;
