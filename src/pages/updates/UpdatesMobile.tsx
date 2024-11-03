import {
  Box,
  Flex,
  Icon,
  Heading,
  useTheme,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Divider,
  HStack,
  Image,
  CloseButton,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import updatesData from "./updatesData";
import { HiOutlineDotsVertical } from "react-icons/hi";

const UpdatesMobile = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const {
    isOpen: isOpenAnnouncement,
    onOpen: onOpenAnnouncement,
    onClose: onCloseAnnouncement,
  } = useDisclosure();

  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search input

  return (
    <Box>
      {/* Header Section */}
      <Flex
        align="center"
        justify="space-between"
        color={theme.colors.white}
        bg={theme.colors.purpleTextColor}
        p={4}
      >
        <Icon
          as={MdChevronLeft}
          boxSize={8}
          color={theme.colors.colorWorkSpace}
          cursor="pointer"
          bg={theme.colors.hamburgerMenuBgColor}
          borderRadius="full"
          mr={4}
          onClick={() => navigate(-1)}
        />
        <Heading as="h1" fontSize={theme.fontSizes.lg} flex="1">
          Announcements
        </Heading>

        {/* Search Icon */}
        <Icon
          as={CiSearch}
          boxSize={8}
          color="gray.300"
          cursor="pointer"
          _hover={{ color: "gray.200" }}
          transition="color 300ms ease-in-out"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />
      </Flex>

      {/* Conditionally render search input */}
      {isSearchOpen && (
        <Flex p={4} bg={theme.colors.heroBgColor}>
          <Input placeholder="Search..." width="100%" />
        </Flex>
      )}

      {updatesData.map((update, index) => {
        return (
          <Box
            key={index}
            cursor="pointer"
            onClick={onOpenAnnouncement}
            p={4}
            borderBlockEnd={`1px solid ${theme.colors.primaryBorderColor}`}
            _hover={{ backgroundColor: theme.colors.heroBgColor }}
          >
            <HStack color="#616161">
              <Text>{update.timestamp.day}</Text>
              <Divider orientation="vertical" mx={2} height="20px" />
              <Text>{update.timestamp.time}</Text>
            </HStack>
            <Flex
              pt={2}
              color="#424242"
              justifyContent="space-between"
              alignItems="center"
            >
              <Heading as="h2" color="#212121" fontSize={theme.fontSizes.md}>
                {update.content.heading}
              </Heading>
              <Icon
                as={MdChevronRight}
                boxSize={8}
                cursor="pointer"
                color="#424242"
                _hover={{ color: "gray.500" }}
                transition="color 300ms ease-in-out"
              />
            </Flex>
            <Text width="100%" pt={2}>
              {update.content.body}
            </Text>
          </Box>
        );
      })}

      {
        <Drawer
          placement="bottom"
          size="full"
          onClose={onCloseAnnouncement}
          isOpen={isOpenAnnouncement}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader px={4}>
              <Flex justify="space-between" alignItems="center">
                <CloseButton
                  backgroundColor={theme.colors.heroBgColor}
                  borderRadius="full"
                  color={theme.colors.purpleTextColor}
                  _hover={{
                    bg: theme.colors.purpleTextColor,
                    color: theme.colors.white,
                  }}
                  transition="all 300ms ease"
                  onClick={onCloseAnnouncement}
                />
                <Icon
                  as={HiOutlineDotsVertical}
                  boxSize={6}
                  color={theme.colors.colorWorkSpace}
                  cursor="pointer"
                />
              </Flex>
            </DrawerHeader>
            <Box px={4}>
              <Image
                src="https://picsum.photos/200/300"
                alt="Announcement image"
                objectFit="cover"
                w="100%"
                maxH="300px"
                borderRadius={theme.borderRadius.sm}
              />
            </Box>
            <Heading
              fontSize="2xl"
              marginBlockStart={4}
              fontWeight="bold"
              px={4}
            >
              Title of Announcement
            </Heading>
            <DrawerBody px={4}>
              <Text>
                Brad is a corporate vice president at Microsoft leading the
                development of windows Azure Storage in 2006. Choose a name that
                conveys the community's purpose to members. Choose a name that
                conveys the community's purpose to members. Choose a name that
                conveys the community's purpose to members. Choose a name that
                conveys the community's purpose to members.
              </Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      }
    </Box>
  );
};

export default UpdatesMobile;
