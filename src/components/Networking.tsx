import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Checkbox,
  useTheme,
  Image,
} from "@chakra-ui/react";
import { LuSlidersHorizontal } from "react-icons/lu";
import { MdSearch } from "react-icons/md";
import attendeeContacts from "../data/attendeeData";

const Networking: React.FC = () => {
  const theme = useTheme();

  // State to hold the search input and filtered contacts
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filterByName, setFilterByName] = useState(true);
  const [filterByPosition, setFilterByPosition] = useState(false);

  // Filter the contacts based on the search term and selected filters
  const filteredContacts = attendeeContacts.filter((contact) => {
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
              boxShadow: `0 0 0 0 ${theme.colors.darkGray}`, //added this line to overwrite chakra built box-shadow effect
              border: `1px solid ${theme.colors.darkGray}`,
            }}
            transition="boxShadow 0.2s ease-in-out"
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
            <Image
              src={contact.image}
              w="60px"
              h="60px"
              objectFit="cover"
              borderRadius="10px"
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
          <Text fontWeight="600" fontSize={theme.fontSizes.sm}>
            No Contact Found. Search with different text
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Networking;
