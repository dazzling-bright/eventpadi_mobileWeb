import React, { useState } from "react";
import {
  Box,
  Heading,
  Select,
  Grid,
  Image,
  Text,
  Flex,
  Icon,
  useTheme,
  useDisclosure,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { MdChevronLeft } from "react-icons/md";
import SponsorModal from "../../components/shared/SponsorPageModal";
import { handleSelectChange } from "../../functions/sponsorFunction";
import { useNavigate } from "react-router-dom";
import { sponsors, Sponsor } from "../../data/sponsorData";
import { CiSearch } from "react-icons/ci";

const Sponsors: React.FC = () => {
  const [selectedSponsor, setSelectedSponsor] = useState<string>("");
  const [currentSponsor, setCurrentSponsor] = useState<Sponsor | null>(null);

  // useDisclosure hook to manage modal state
  const { isOpen, onOpen, onClose } = useDisclosure();

  const theme = useTheme();
  const navigate = useNavigate();

  // Filter sponsors based on selected value
  const filteredSponsors = selectedSponsor
    ? sponsors.filter((sponsor) => sponsor.name === selectedSponsor)
    : sponsors;

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
          Our Sponsors
        </Heading>

        <Icon
          as={CiSearch}
          boxSize={8}
          color="gray.300"
          cursor="pointer"
          _hover={{ color: "gray.200" }}
          transition="color 300ms ease-in-out"
        />
      </Flex>

      {/* Dropdown Section */}
      <Box my={4} p={4}>
        <Select
          placeholder="Select a sponsor..."
          value={selectedSponsor}
          variant="outline"
          cursor="pointer"
          onChange={(e) => handleSelectChange(e, setSelectedSponsor)}
          aria-label="Select a sponsor"
          width="100%"
          size="lg"
        >
          {sponsors.map((sponsor, index) => (
            <option key={index} value={sponsor.name}>
              {sponsor.name}
            </option>
          ))}
        </Select>
      </Box>

      {/* Sponsors Grid Section */}
      <Grid
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
        gap={6}
        marginBlockEnd={8}
        px={4}
        tabIndex={0}
      >
        {filteredSponsors.length > 0 ? (
          filteredSponsors.map((sponsor, index) => (
            <Card
              key={index}
              borderRadius="2xl"
              role="group"
              cursor="pointer"
              border={`1px solid ${theme.colors.hamburgerMenuBgColor}`}
              _hover={{
                boxShadow: `0 0 5px 5px ${theme.colors.hamburgerMenuBgColor}`,
              }}
              transition="boxShadow 300ms ease-in-out"
              tabIndex={0}
              aria-label={`${sponsor.name} details`}
              onClick={() => {
                setCurrentSponsor(sponsor);
                onOpen(); // Opens the modal
              }}
            >
              <CardBody>
                <Image
                  borderRadius="2xl"
                  src={sponsor.image}
                  alt={`${sponsor.name} logo`}
                  maxH="150px"
                  w="100%"
                  objectFit="cover"
                />
                <Heading as="h3" size="md" textAlign="center" py={2}>
                  {sponsor.name}
                </Heading>
                <Text textAlign="center">
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {sponsor.website}
                  </a>
                </Text>
              </CardBody>
            </Card>
          ))
        ) : (
          <Text>No sponsors found.</Text>
        )}
      </Grid>

      {/* Sponsor Modal */}
      {currentSponsor && (
        <SponsorModal
          sponsor={currentSponsor}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </Box>
  );
};

export default Sponsors;
