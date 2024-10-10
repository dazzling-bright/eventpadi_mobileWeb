import React, { useState } from "react";
import { Box, Heading, Text, Flex, Icon, useTheme } from "@chakra-ui/react";
import {
  MdAnnouncement,
  MdSchedule,
  MdPeople,
  MdGroup,
  MdBusiness,
  MdEventAvailable,
  MdPhoto,
  MdStore,
  MdLibraryBooks,
  MdChevronRight,
} from "react-icons/md";

const EventDetails: React.FC = () => {
  const theme = useTheme();

  // List of event details with title, description, associated icon, and count
  const eventDetails = [
    {
      title: "Announcements",
      description: "All event announcements",
      icon: MdAnnouncement,
      count: 32,
    },
    {
      title: "Agenda",
      description: "Scheduled sessions",
      icon: MdSchedule,
      count: 12,
    },
    {
      title: "Speakers",
      description: "All event speakers",
      icon: MdPeople,
      count: 3,
    },
    {
      title: "Attendees",
      description: "Other attendees at the event",
      icon: MdGroup,
      count: 44,
    },
    {
      title: "Sponsors",
      description: "All sponsors for the event",
      icon: MdBusiness,
      count: 10,
    },
    {
      title: "Exhibitors",
      description: "All exhibitors at the event",
      icon: MdEventAvailable,
      count: 32,
    },
    {
      title: "Resources",
      description: "Resources available",
      icon: MdLibraryBooks,
      count: 0,
    },
    {
      title: "Gallery",
      description: "Memories about the event",
      icon: MdPhoto,
      count: 0,
    },
    {
      title: "Vendors",
      description: "Available vendors to engage",
      icon: MdStore,
      count: 3,
    },
  ];

  // State to manage the visibility of details
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box p={4}>
      {eventDetails.map((item, index) => (
        <Box key={index}>
          <Flex
            color={theme.colors.colorWorkSpace}
            alignItems="center"
            justifyContent="space-between"
            p={4}
            bg={theme.colors.topNavColor}
            borderBlockEndWidth="1px"
            borderBlockEndColor={theme.colors.primaryBorderColor}
            transition="background-color 0.3s"
            _hover={{ bg: theme.colors.heroBgColor, cursor: "pointer" }}
            onClick={() => handleToggle(index)}
          >
            <Flex alignItems="center">
              <Icon
                as={item.icon}
                boxSize={8}
                borderRadius="full"
                color="#22577A"
                mr={4}
                bg={theme.colors.heroBgColor}
                p={2}
              />
              <Box>
                <Heading fontSize={theme.fontSizes.md}>{item.title}</Heading>
                <Text fontSize={theme.fontSizes.sm} color="#627D98" mt={2}>
                  {item.description} ({item.count})
                </Text>
              </Box>
            </Flex>
            {/* Chevron icon with rotation animation */}
            <MdChevronRight
              size={24}
              color={theme.colors.purpleTextColor}
              style={{
                transition: "transform 0.3s ease",
                transform:
                  expandedIndex === index ? "rotate(90deg)" : "rotate(0deg)",
              }}
            />
          </Flex>

          <Box borderRadius="md" overflow="hidden">
            {expandedIndex === index && (
              <Text
                p={expandedIndex === index ? "10px" : "0"}
                maxHeight={expandedIndex === index ? "200px" : "0"}
                transition="padding 0.5s ease-in-out, max-height 0.5s ease-in-out"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                suscipit voluptatem reprehenderit optio quidem ducimus, iusto
                consequatur, esse vel error libero sunt ab soluta. Obcaecati
                ducimus neque dignissimos asperiores. Maiores!
              </Text>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default EventDetails;
