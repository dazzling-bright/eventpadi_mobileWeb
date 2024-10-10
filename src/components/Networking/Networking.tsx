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
  Checkbox,
  useTheme,
} from "@chakra-ui/react";
import { LuSlidersHorizontal } from "react-icons/lu";
import { MdPerson, MdSearch } from "react-icons/md";

const Networking: React.FC = () => {
  const theme = useTheme();

  // List of networking contacts
  const networkContacts = [
    { name: "Jason Ozah", title: "HR Manager", company: "Bizzabo Limited" },
    { name: "Emma Stone", title: "HR Manager", company: "Bizzabo Limited" },
    { name: "Liam Carter", title: "Developer", company: "Bizzabo Limited" },
    { name: "Sophia Green", title: "HR Manager", company: "Bizzabo Limited" },
    { name: "David Miller", title: "Developer", company: "Bizzabo Limited" },
    { name: "Jason Ozah", title: "Designer", company: "Bizzabo Limited" },
  ];

  // State to hold the search input and filtered contacts
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filterByName, setFilterByName] = useState(true);
  const [filterByPosition, setFilterByPosition] = useState(false);

  // Filter the contacts based on the search term and selected filters
  const filteredContacts = networkContacts.filter((contact) => {
    const nameMatches =
      filterByName &&
      contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    const titleMatches =
      filterByPosition &&
      contact.title.toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatches || titleMatches;
  });

  return (
    <Box p={4} color={theme.colors.colorWorkSpace}>
      <Flex alignItems="center" mb={4}>
        {/* Search bar with Slider icon */}
        <InputGroup flex={1} height={12}>
          <InputLeftElement
            height="100%"
            children={
              <MdSearch
                color={theme.colors.darkGray}
                size={theme.fontSizes["3xl"]}
              />
            }
          />
          <Input
            placeholder="Search for an attendee"
            color={theme.colors.darkGray}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            height={12}
            borderRadius="md"
            _focus={{
              borderColor: theme.colors.darkGray,
              boxShadow: `0 0 3px 1px ${theme.colors.darkGray}`,
            }}
            transition="all 0.3s ease-in-out"
          />
        </InputGroup>

        {/* Slider IconButton */}
        <IconButton
          aria-label="Filter"
          icon={<LuSlidersHorizontal />}
          ml={4}
          boxSize={12}
          background={theme.colors.heroBgColor}
          color={theme.colors.purpleTextColor}
          _hover={{ bg: theme.colors.hamburgerMenuBgColor }}
          borderRadius="md"
          onClick={() => setShowFilters(!showFilters)}
        />
      </Flex>

      {/* Conditional rendering of filter options */}
      {showFilters && (
        <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" mb={4}>
          <Text fontWeight="bold" mb={2}>
            Filter Options
          </Text>
          <Checkbox
            isChecked={filterByName}
            display="flex"
            onChange={(e) => setFilterByName(e.target.checked)}
            mr={3}
          >
            Filter by Name
          </Checkbox>
          <Checkbox
            isChecked={filterByPosition}
            onChange={(e) => setFilterByPosition(e.target.checked)}
            mb={2}
          >
            Filter by Position
          </Checkbox>
        </Box>
      )}

      {/* Display filtered contacts */}
      {filteredContacts.map((contact, index) => (
        <Flex
          key={index}
          p={4}
          alignItems="center"
          cursor="pointer"
          justifyContent="space-between"
          borderBlockEndWidth="1px"
          borderColor={theme.colors.primaryBorderColor}
          _hover={{ backgroundColor: theme.colors.primaryBorderColor }}
          transition="backgroundColor 0.3s ease-in-out"
        >
          <HStack spacing={4}>
            <Icon
              as={MdPerson}
              boxSize={6}
              color={theme.colors.purpleTextColor}
            />
            <Box>
              <Text fontWeight="bold" fontSize={theme.fontSizes.md}>
                {contact.name}
              </Text>
              <Text fontSize="sm" color={theme.colors.darkGray}>
                {contact.title} @ {contact.company}
              </Text>
            </Box>
          </HStack>
        </Flex>
      ))}

      {/* Show this message if no contacts matches the search term */}
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
