import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  HStack,
  IconButton,
  useTheme,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import HeroImage from "./images/CTY_event_banner.png";

/* Hero Figure Component */
const HeroFigure: React.FC = () => {
  const theme = useTheme();

  return (
    <Box position="relative" overflow="hidden" maxHeight="700px">
      <Image
        src={HeroImage}
        alt="CTY Food Festival, Akwa-Ibom Edition to be held in Lagos state. Admission is Free"
        objectFit="cover"
        width="100%"
        height="100%"
      />
      {/* Hamburger Menu Icon */}
      <IconButton
        icon={<FaBars />}
        aria-label="Open Menu"
        position="absolute"
        fontSize={theme.fontSizes.xl}
        top={4}
        left={4}
        bg={theme.colors.hamburgerMenuBgColor}
        color={theme.colors.topNavIconsColor}
        _hover={{
          bg: "white",
          boxShadow: "md",
        }}
        borderRadius={theme.borderRadius.lg}
        size="lg"
      />
      <Flex
        position="absolute"
        fontWeight="bold"
        bottom={0}
        left={0}
        right={0}
        py={4}
        px={4}
        alignItems="center"
        justifyContent="space-between"
        color={theme.colors.topNavColor}
        bg="rgba(0, 0, 0, 0.5)"
      >
        <HStack>
          <MdLocationOn size={theme.fontSizes.xl} />
          <Text>22 Kilamjaro Road. V.I. Lagos.</Text>
        </HStack>
        <HStack>
          <GoDotFill size={theme.fontSizes.xl} />
          <Text>Wed, Jul 24 - 8:00am</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

/* Hero Text Component */
const HeroTextContent: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();

  // Array of event details with corresponding links
  const details = [
    { name: "Event Details", path: "/event-details" },
    { name: "Community", path: "/community" },
    { name: "Networking", path: "/networking" },
  ];

  return (
    <Box
      px={4}
      color={theme.colors.colorWorkSpace}
      bg={theme.colors.heroBgColor}
    >
      <Box px={4}>
        <Heading
          as="h2"
          fontSize={theme.fontSizes["2xl"]}
          lineHeight="25px"
          py={4}
        >
          The CTY Food Festival 2024
        </Heading>
        <Text fontWeight="500" fontSize={theme.fontSizes.md} lineHeight="24px">
          This is a song of thanks to the One who fights for us even in our
          weakness and sets us free to worship him. This song has been reviving
          us as a community. Read more
        </Text>
      </Box>

      {/* Links for the tabs */}
      <Flex my={4} justifyContent="space-between">
        {details.map((item, index) => (
          <Box
            key={index}
            borderBottom={`6px solid ${
              location.pathname === item.path
                ? theme.colors.purpleTextColor
                : "transparent"
            }`}
            transition="border-bottom 0.3s"
            w="fit-content"
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
              >
                {item.name}
              </Text>
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

/** Full Hero Component */
const Hero: React.FC = () => {
  return (
    <Box>
      <HeroFigure />
      <HeroTextContent />
    </Box>
  );
};

export default Hero;
