import React from "react";
import { Box, Heading, Text, Flex, Icon } from "@chakra-ui/react";
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
  // List of event details with title, description, and associated icon
  const eventDetails = [
    {
      title: "Announcements",
      description: "All event announcements (32)",
      icon: MdAnnouncement,
    },
    {
      title: "Agenda",
      description: "Scheduled sessions (12)",
      icon: MdSchedule,
    },
    {
      title: "Speakers",
      description: "All event speakers (3)",
      icon: MdPeople,
    },
    {
      title: "Attendees",
      description: "Other attendees at the event (44)",
      icon: MdGroup,
    },
    {
      title: "Sponsors",
      description: "All sponsors for the event (10)",
      icon: MdBusiness,
    },
    {
      title: "Exhibitors",
      description: "All exhibitors at the event (32)",
      icon: MdEventAvailable,
    },
    {
      title: "Resources",
      description: "Resources available",
      icon: MdLibraryBooks,
    },
    {
      title: "Gallery",
      description: "Memories about the event",
      icon: MdPhoto,
    },
    {
      title: "Vendors",
      description: "Available vendors to engage",
      icon: MdStore,
    },
  ];

  return (
    <Box p={4}>
      <Heading size="md" mb={4}>
        Event Details
      </Heading>

      {eventDetails.map((item, index) => (
        <Flex
          key={index}
          alignItems="center"
          justifyContent="space-between"
          p={4}
          mb={4}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          transition="background-color 0.3s"
          _hover={{ bg: "#f7f7f7" }}
        >
          <Flex alignItems="center">
            <Icon as={item.icon} boxSize={6} color="purple.600" mr={4} />
            <Box>
              <Heading size="sm">{item.title}</Heading>
              <Text fontSize="sm" color="gray.500">
                {item.description}
              </Text>
            </Box>
          </Flex>
          <MdChevronRight size={24} color="gray.400" />
        </Flex>
      ))}
    </Box>
  );
};

export default EventDetails;
