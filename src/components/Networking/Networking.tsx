import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Icon,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
} from "@chakra-ui/react";
import { LuSlidersHorizontal } from "react-icons/lu";
import { MdPerson, MdSearch } from "react-icons/md";

const Networking: React.FC = () => {
  // List of networking contacts
  const networkContacts = [
    { name: "Jason Ozah", title: "HR Manager", company: "Bizzabo Limited" },
    { name: "Emma Stone", title: "HR Manager", company: "Bizzabo Limited" },
    { name: "Liam Carter", title: "HR Manager", company: "Bizzabo Limited" },
    { name: "Sophia Green", title: "HR Manager", company: "Bizzabo Limited" },
    { name: "David Miller", title: "HR Manager", company: "Bizzabo Limited" },
    { name: "Jason Ozah", title: "HR Manager", company: "Bizzabo Limited" },
  ];

  // State to hold the search input and filtered contacts
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the contacts based on the search term
  const filteredContacts = networkContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={4}>
     
      <Flex alignItems="center" mb={4}>
        {/* Search bar with Slider icon */}
        <InputGroup flex={1} height={12}>
          <InputLeftElement
            height="100%"
            children={<MdSearch color="gray.400" size="26px" />}
          />
          <Input
            placeholder="Search for an attendee"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            height={12}
            borderColor="gray.300"
            _focus={{ borderColor: "purple.500" }}
            borderRadius="md"
          />
        </InputGroup>

        {/* Slider IconButton */}
        <IconButton
          aria-label="Filter"
          icon={<LuSlidersHorizontal />}
          ml={4}
          boxSize={12}
          background="#EFE7FD"
          color="purple.600"
          _hover={{ bg: "purple.500" }}
          borderRadius="md"
        />
      </Flex>

      {/* Display filtered contacts */}
      {filteredContacts.map((contact, index) => (
        <Flex
          key={index}
          p={4}
          my={2}
          alignItems="center"
          justifyContent="space-between"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _hover={{ bg: "gray.50" }}
        >
          <HStack spacing={4}>
            <Icon as={MdPerson} boxSize={6} color="purple.600" />
            <Box>
              <Text fontWeight="bold" fontSize="lg">
                {contact.name}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {contact.title} @ {contact.company}
              </Text>
            </Box>
          </HStack>
        </Flex>
      ))}

      {/* Show this message if no contacts match the search term */}
      {filteredContacts.length === 0 && (
        <Box
          textAlign="center"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          py={8}
        >
          <Text fontWeight="bold" fontSize="lg">
            No Contact Found. Search with different text
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Networking;
