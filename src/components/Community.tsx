import { Box, Text, Flex, Icon, HStack, useTheme } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import communitySections from "../data/communityData";

const Community: React.FC = () => {
  const theme = useTheme();

  return (
    <Box p={4} color={theme.colors.colorWorkSpace}>
      {communitySections.map((section, index) => (
        <Flex
          key={index}
          p={4}
          cursor="pointer"
          my={3}
          alignItems="center"
          justifyContent="space-between"
          borderWidth="1px"
          borderColor={theme.colors.primaryBorderColor}
          borderRadius="2xl"
          _hover={{ bg: theme.colors.primaryBorderColor }}
        >
          <HStack spacing={4}>
            <Box fontWeight="600">
              <Text
                fontSize={theme.fontSizes.sm}
                textTransform="uppercase"
                mb={2}
              >
                {section.title}
              </Text>
              <Flex
                alignItems="center"
                fontSize="12px"
                color={theme.colors.purpleTextColor}
              >
                {section.posts} posts
                <Text
                  as="span"
                  fontSize={theme.fontSizes.md}
                  mx={1}
                  color="#627D98"
                >
                  •
                </Text>
                {section.replies} replies
              </Flex>
            </Box>
          </HStack>

          <Icon
            as={FaChevronRight}
            boxSize={4}
            color={theme.colors.purpleTextColor}
          />
        </Flex>
      ))}
    </Box>
  );
};

export default Community;
