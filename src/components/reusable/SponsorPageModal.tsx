import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useTheme,
} from "@chakra-ui/react";
import SponsorContactInfo from "../../data/sponsorContactInformation";
import socialMediaLinks from "../../data/sponsorData";


interface SponsorModalProps {
  sponsor: {
    name: string;
    image: string;
    website: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}


const SponsorModal: React.FC<SponsorModalProps> = ({
  sponsor,
  isOpen,
  onClose,
}) => {
  const theme = useTheme();
  if (!sponsor) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{sponsor.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" alignItems="center">
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
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sponsor.website}
              </a>
            </Text>
          </Flex>

          <Box
            borderBottom={`1px solid ${theme.colors.primaryBorderColor}`}
            py={4}
          >
            <Heading as="h3" fontSize={theme.fontSizes.lg} my={2}>
              About Sponsor
            </Heading>
            <Text>
              Brad is a corporate vice president at Microsoft leading the
              development of Windows Azure Storage in 2006. Choose a name that
              conveys the community's purpose to members. Choose a name that
              conveys the community's purpose to members. Choose a name that
              conveys the community's purpose to members...
              <Text as="span">Read more</Text>
            </Text>
          </Box>

          <Box
            borderBottom={`1px solid ${theme.colors.primaryBorderColor}`}
            py={4}
          >
            <Heading as="h3" fontSize={theme.fontSizes.lg} my={2}>
              Contact Information
            </Heading>
            {SponsorContactInfo.map((contact, index) => (
              <Flex justify="space-between" my={2} key={index}>
                <Text>{contact.label}</Text>
                <Text>{contact.value}</Text>
              </Flex>
            ))}
          </Box>
        </ModalBody>

        <ModalFooter py={0}>
          <Box w="100%">
            <Heading as="h3" fontSize={theme.fontSizes.lg}>
              Social Media Links
            </Heading>
            <Flex justify="space-between" my={2} w="100%">
              {socialMediaLinks.map((link) => (
                <IconButton
                  key={link.label}
                  as="a"
                  size="lg"
                  fontSize={24}
                  href={link.url}
                  target="_blank"
                  aria-label={link.label}
                  icon={link.icon}
                  color={theme.colors.purpleTextColor}
                  bg={theme.colors.hamburgerMenu}
                  borderRadius="full"
                  _hover={{
                    bg: theme.colors.purpleTextColor,
                    color: theme.colors.white,
                  }}
                />
              ))}
            </Flex>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SponsorModal;
