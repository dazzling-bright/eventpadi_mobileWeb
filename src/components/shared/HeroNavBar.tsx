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
      overflowX="auto"
      whiteSpace="nowrap"
      sx={{
        // Hide scrollbar visually but still allow scrolling
        "::-webkit-scrollbar": { display: "none" },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      }}
    >
      {details.map((item, index) => {
        const isActiveTab: boolean = location.pathname === item.path;

        return (
          <Box
            key={index}
            width="fit-content"
            textAlign="center"
            flexShrink={0}
            _hover={{
              cursor: "pointer",
            }}
          >
            <Link to={item.path}>
              <Flex alignItems="center">
                <Text
                  fontWeight="bold"
                  fontSize={theme.fontSizes.md}
                  p={4}
                  color={
                    isActiveTab
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

                {/** Red dot indicator */}
                <Box
                  width="6px"
                  height="6px"
                  aspectRatio={1}
                  ml={2}
                  backgroundColor={isActiveTab ? "red" : "transparent"}
                  borderRadius="full"
                  transition="background-color 0.3s ease"
                />
              </Flex>
            </Link>

            {/* Border below the link */}
            <BorderIndicator path={item.path} />
          </Box>
        );
      })}
    </Flex>
  );
};

export default HeroNavBar;
