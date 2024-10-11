import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Flex, Box, Text, useTheme } from "@chakra-ui/react";
import BorderIndicator from "./BorderIndicator";

interface Detail {
  name: string;
  path: string;
}

interface HeroNavBarProps {
  details: Detail[];
}

const HeroNavBar: React.FC<HeroNavBarProps> = ({ details }) => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Flex
      my={4}
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      {details.map((item, index) => (
        <Box
          key={index}
          width="fit-content"
          textAlign="center"
          _hover={{
            cursor: "pointer",
          }}
        >
          {/* Link to the corresponding route */}
          <Link to={item.path}>
            <Text
              fontWeight="bold"
              fontSize={theme.fontSizes.md}
              p={4}
              color={
                location.pathname === item.path
                  ? theme.colors.purpleTextColor
                  : theme.colors.colorWorkSpace
              }
              _hover={{
                color: theme.colors.purpleTextColor,
              }}
              transition="color 300ms ease-in-out"
            >
              {item.name}
            </Text>
          </Link>

          {/* Empty Box acting as a border */}
          <BorderIndicator path={item.path} />
        </Box>
      ))}
    </Flex>
  );
};

export default HeroNavBar;
