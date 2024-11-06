import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import EventDetails from "../EventDetails";
import Community from "../Community";
import Networking from "../Networking";

interface Detail {
  name: string;
  path: string;
}

interface HeroNavBarProps {
  details: Detail[];
}

const HeroNavBar: React.FC<HeroNavBarProps> = ({ details }) => {
  const theme = useTheme();

  return (
    <Tabs position="relative" variant="unstyled" my={4} defaultIndex={0}>
      {/* Scrollable TabList with snapping behavior */}
      <TabList
        display="flex"
        overflowX="auto"
        scrollBehavior="smooth"
        justifyContent="space-between"
        css={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar for better UX
          },
        }}
      >
        {details.map((item, index) => (
          <Tab
            fontWeight="bold"
            position="relative"
            flexShrink={0}
            py={3}
            px={2}
            fontSize={theme.fontSizes.md}
            color={theme.colors.colorWorkSpace}
            transition="color 0.3s ease, transform 0.3s ease"
            _hover={{
              color: theme.colors.purpleTextColor,
            }}
            _selected={{
              color: theme.colors.purpleTextColor,
              _before: {
                content: '""',
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "100%",
                height: "6px",
                borderRadius: "7px",
                bg: theme.colors.purpleTextColor,
                transition: "background-color 0.3s ease",
              },
              // Red dot indicator
              _after: {
                content: '""',
                marginInlineStart: "8px",
                marginBlockEnd: "20%",
                width: "6px",
                height: "6px",
                borderRadius: "full",
                bg: "red",
                transition: " margin-block-end 0.3s ease-in-out",
              },
            }}
            key={index}
          >
            {item.name}
          </Tab>
        ))}
      </TabList>

      <TabPanels bg={theme.colors.white}>
        <TabPanel p={0}>
          <EventDetails />
        </TabPanel>
        <TabPanel p={0}>
          <Community />
        </TabPanel>
        <TabPanel p={0}>
          <Networking />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default HeroNavBar;
