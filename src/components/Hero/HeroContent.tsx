import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  useTheme,
  HStack,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
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

      <Flex
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={2}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={theme.colors.topNavColor}
        bg="rgba(0, 0, 0, 0.5)"
      >
        <HStack>
          <MdLocationOn size={20} />
          <Text>22 Kilamjaro Road. V.I. Lagos.</Text>
        </HStack>
        <Text>Wed, Jul 24 - 8:00am</Text>
      </Flex>
    </Box>
  );
};

/* Hero Text Component */
const HeroTextContent: React.FC = () => {
  return (
    <Box p={4}>
      <Heading as="h2">The CTY Food Festival 2024</Heading>
      <Text>
        This is a song of thanks to the One who fights for us even in our
        weakness and sets us free to worship him. This song has been reviving us
        as a community. Read more
      </Text>
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
