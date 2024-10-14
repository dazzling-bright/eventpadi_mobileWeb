// pages/Sponsors.tsx
import React, { useState } from "react";
import {
  Box,
  Heading,
  Select,
  Grid,
  Image,
  Text,
  Flex,
  useTheme,
  Icon,
} from "@chakra-ui/react";
import { MdChevronLeft, MdSearch } from "react-icons/md";
import DangoteIndustryImage from "../assets/sponsor-images/dangotes-pastries.png";
import GoldenPennyImage from "../assets/sponsor-images/golden-penny.png";
import AutoFixerImage from "../assets/sponsor-images/autofixer.png";
import BusinessmanImage from "../assets/sponsor-images/businessman.png";
import SponsorModal from "../components/shared/SponsorPageModal";
import {
  handleSelectChange,
  handleSponsorClick,
  handleCloseModal,
  Sponsor,
} from "../functions/sponsorFunction";
import { useNavigate } from "react-router-dom";

// sponsor data
const sponsors: Sponsor[] = [
  {
    name: "Dangote Industries",
    image: DangoteIndustryImage,
    website: "https://www.dangote.com",
  },
  {
    name: "Golden Penny",
    image: GoldenPennyImage,
    website: "https://www.goldenpenny.com",
  },
  {
    name: "AutoFixer",
    image: AutoFixerImage,
    website: "https://www.autofixer.com",
  },
  {
    name: "Businessman",
    image: BusinessmanImage,
    website: "https://www.goldenpenny.com",
  },
  {
    name: "Golden Penny",
    image: GoldenPennyImage,
    website: "https://www.goldenpenny.com",
  },
  {
    name: "AutoFixer",
    image: AutoFixerImage,
    website: "https://www.autofixer.com",
  },
  {
    name: "Businessman",
    image: BusinessmanImage,
    website: "https://www.goldenpenny.com",
  },
  {
    name: "Golden Penny",
    image: GoldenPennyImage,
    website: "https://www.goldenpenny.com",
  },
];

const Sponsors: React.FC = () => {
  const [selectedSponsor, setSelectedSponsor] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [currentSponsor, setCurrentSponsor] = useState<Sponsor | null>(null);

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
          as={MdSearch}
          boxSize={8}
          borderRadius="full"
          color={theme.colors.white}
          _hover={{ bg: theme.colors.hamburgerMenuHoverColor }}
        />
      </Flex>

      {/* Dropdown Section */}
      <Box my={4} p={4}>
        <Select
          placeholder="Select a sponsor..."
          value={selectedSponsor}
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
        gap={4}
        px={4}
        tabIndex={0}
      >
        {filteredSponsors.length > 0 ? (
          filteredSponsors.map((sponsor, index) => (
            <Box
              key={index}
              borderRadius="2xl"
              role="group"
              cursor="pointer"
              _hover={{
                boxShadow: `0 0 5px 2px ${theme.colors.hamburgerMenuBgColor}`,
              }}
              transition="boxShadow 300ms ease-in-out"
              tabIndex={0}
              aria-label={`${sponsor.name} details`}
              onClick={() =>
                handleSponsorClick(sponsor, setCurrentSponsor, setShowModal)
              }
            >
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
              <Box textAlign="center">
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sponsor.website}
                </a>
              </Box>
            </Box>
          ))
        ) : (
          <Text>No sponsors found.</Text>
        )}
      </Grid>

      {/* Sponsor Modal */}
      {showModal && (
        <SponsorModal
          sponsor={currentSponsor}
          onClose={() => handleCloseModal(setShowModal, setCurrentSponsor)}
        />
      )}
    </Box>
  );
};

export default Sponsors;
