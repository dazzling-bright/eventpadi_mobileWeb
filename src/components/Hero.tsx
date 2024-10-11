import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  HStack,
  useTheme,
} from "@chakra-ui/react";
import { MdLocationOn, MdOutlineDateRange } from "react-icons/md";
import HeroImage from "../assets/images/CTY_event_banner.png";
import { useState } from "react";
import HeroNavBar from "./shared/HeroNavBar";
import HamburgerMenu from "./shared/HamburgerMenu";

/* Hero Figure Component */
const HeroFigure: React.FC = () => {
  const theme = useTheme();

  const handleMenuClick = () => {
    alert("I will soon be fully functional. Welcome to EventPadi");
  };

  return (
    <Box position="relative" overflow="hidden" maxHeight="700px">
      <Image
        src={HeroImage}
        alt="CTY Food Festival, Akwa-Ibom Edition to be held in Lagos state. Admission is Free"
        objectFit="cover"
        width="100%"
        height="auto"
        maxH="700px"
        loading="lazy"
        decoding="async"
      />
      <HamburgerMenu onClick={handleMenuClick} />

      <Flex
        position="absolute"
        fontWeight="bold"
        bottom={0}
        left={0}
        right={0}
        py={4}
        px={4}
        gap={2}
        flexDirection="column"
        justifyContent="space-between"
        color={theme.colors.topNavColor}
        bg="rgba(0, 0, 0, 0.5)"
      >
        <HStack>
          <MdLocationOn size={theme.fontSizes.xl} />
          <Text>22 Kilamjaro Road. V.I. Lagos.</Text>
        </HStack>
        <HStack>
          <MdOutlineDateRange size={theme.fontSizes.xl} />
          <Text>Wed, Jul 24 - 8:00am</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

/* Hero Text Component */
const HeroTextContent: React.FC = () => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false); // State for toggling Herocontent text

  // Array of event details with corresponding links
  const details = [
    { name: "Details", path: "/event-details" },
    { name: "Community", path: "/community" },
    { name: "Networking", path: "/networking" },
  ];

  // full text, truncated text variables
  const fullText =
    "This is a song of thanks to the One who fights for us even in our weakness and sets us free to worship him. This song has been reviving us as a community.";

  const truncatedText = fullText.slice(0, 80) + "...";

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
        <Text fontSize={theme.fontSizes.md} lineHeight="24px">
          {isExpanded ? fullText : truncatedText}
          {/* Truncated text */}
          <Text
            as="span"
            p={2}
            cursor="pointer"
            color={theme.colors.customBlue}
            fontWeight="bold"
            textDecoration="underline"
            _hover={{ color: theme.colors.purpleTextColor }}
            transition="color 300ms ease"
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Read less" : "Read more"}
          </Text>
        </Text>
      </Box>

      {/* Links for the tabs */}
      <HeroNavBar details={details} />
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
