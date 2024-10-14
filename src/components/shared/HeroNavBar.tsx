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
      scrollBehavior="smooth"
      sx={{
        "::-webkit-scrollbar": { display: "none" }, // Hide scrollbar visually but allow scrolling
        "-ms-overflow-style": "none", // Hide scrollbar in IE/Edge
        "scrollbar-width": "none", // Hide scrollbar in Firefox
        touchAction: "pan-x", // Allow smooth horizontal scrolling on mobile
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
            _hover={{ cursor: "pointer" }}
          >
            <Link to={item.path}>
              <Flex
                alignItems="center"
                minW="120px"
                transition="all 300ms ease-in-out"
                _hover={{
                  backgroundColor: theme.colors.hoverBgColor,
                  color: theme.colors.purpleTextColor,
                }}
              >
                <Text
                  fontWeight="bold"
                  fontSize={theme.fontSizes.md}
                  px={4}
                  py={2}
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
                  backgroundColor={isActiveTab ? "red" : "transparent"}
                  opacity={isActiveTab ? 1 : 0}
                  borderRadius="full"
                  mr={2}
                  transition="all 300ms ease-in-out"
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
