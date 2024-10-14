import React from "react";
import {
  Box,
  Button,
  Image,
  Heading,
  Text,
  useTheme,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import SponsorContactInfo from "../../data/sponsorContactInformation";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaReddit,
} from "react-icons/fa";

interface SponsorModalProps {
  sponsor: {
    name: string;
    image: string;
    website: string;
  } | null;
  onClose: () => void;
}

const SponsorModal: React.FC<SponsorModalProps> = ({ sponsor, onClose }) => {
  const theme = useTheme();
  if (!sponsor) return null;

  return (
    <Box
      position="fixed"
      fontSize={theme.fontSizes.sm}
      p={6}
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      color={theme.colors.colorWorkSpace}
      bg={theme.colors.white}
      zIndex={100}
      overflowY="auto"
      scrollBehavior="smooth"
    >
      <Button position="absolute" top={4} left={4} onClick={onClose}>
        Close
      </Button>

      <Flex mt={16} flexDirection="column" alignItems="center">
        <Image
          src={sponsor.image}
          alt={`${sponsor.name} logo`}
          borderRadius="lg"
          objectFit="cover"
          alignSelf="auto"
          maxH="300px"
          mb={4}
        />
        <Heading as="h2" my={2} fontSize={theme.fontSizes.lg}>
          {sponsor.name}
        </Heading>

        <Text>
          <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
            {sponsor.website}
          </a>
        </Text>
      </Flex>

      <Box borderBottom={`1px solid ${theme.colors.primaryBorderColor}`} py={4}>
        <Heading as="h3" fontSize={theme.fontSizes.lg} my={2}>
          About Sponsor
        </Heading>
        <Text>
          Brad is a corporate vice president at Microsoft leading the
          development of windows Azure Storage in 2006. Choose a name that
          conveys the community's purpose to members. Choose a name that conveys
          the community's purpose to members.Choose a name that conveys the
          community's purpose to members... <Text as="span">Read more</Text>
        </Text>
      </Box>

      <Box borderBottom={`1px solid ${theme.colors.primaryBorderColor}`}>
        <Heading as="h3" fontSize={theme.fontSizes.lg} my={2}>
          Contact Information
        </Heading>
        {SponsorContactInfo.map((contact, index) => {
          return (
            <Flex justify="space-between" my={2} key={index}>
              <Text>{contact.label}</Text>
              <Text>{contact.value}</Text>
            </Flex>
          );
        })}
      </Box>

      <Box py={4}>
        <Heading as="h3">Social Media Links</Heading>
        <Flex justify="space-around" my={2}>
          <IconButton
            as="a"
            href="https://www.facebook.com"
            target="_blank"
            aria-label="Facebook"
            icon={<FaFacebook />}
            color={theme.colors.purpleTextColor}
            bg={theme.colors.hamburgerMenu}
            borderRadius="full"
            _hover={{
              bg: theme.colors.purpleTextColor,
              color: theme.colors.white,
            }}
          />
          <IconButton
            as="a"
            href="https://www.twitter.com"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            color={theme.colors.purpleTextColor}
            bg={theme.colors.hamburgerMenu}
            borderRadius="full"
            _hover={{
              bg: theme.colors.purpleTextColor,
              color: theme.colors.white,
            }}
          />
          <IconButton
            as="a"
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            color={theme.colors.purpleTextColor}
            bg={theme.colors.hamburgerMenu}
            borderRadius="full"
            _hover={{
              bg: theme.colors.purpleTextColor,
              color: theme.colors.white,
            }}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            color={theme.colors.purpleTextColor}
            bg={theme.colors.hamburgerMenu}
            borderRadius="full"
            _hover={{
              bg: theme.colors.purpleTextColor,
              color: theme.colors.white,
            }}
          />

          <IconButton
            as="a"
            href="https://www.reddit.com"
            target="_blank"
            aria-label="Reddit"
            icon={<FaReddit />}
            color={theme.colors.purpleTextColor}
            bg={theme.colors.hamburgerMenu}
            borderRadius="full"
            _hover={{
              bg: theme.colors.purpleTextColor,
              color: theme.colors.white,
            }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default SponsorModal;
