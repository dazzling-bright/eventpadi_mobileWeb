import { Box, Text, Flex, Icon, HStack, useTheme } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

const Community: React.FC = () => {
  const theme = useTheme();
  // List of community categories with posts and replies
  const communitySections = [
    { title: "GENERAL COMMENTS", posts: 33, replies: 25 },
    { title: "FEEDBACK & SUGGESTIONS", posts: 45, replies: 30 },
    { title: "HELP & SUPPORT", posts: 20, replies: 18 },
    { title: "SOCIAL DISCUSSIONS", posts: 50, replies: 40 },
    { title: "ANNOUNCEMENTS", posts: 60, replies: 22 },
  ];

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
            <Box fontWeight="bold">
              <Text
                fontSize={theme.fontSizes.md}
                textTransform="uppercase"
                mb={2}
              >
                {section.title}
              </Text>
              <Text
                fontSize={theme.fontSizes.sm}
                color={theme.colors.purpleTextColor}
              >
                {section.posts} posts
                <Text as="span" mx={1} color="#627D98">
                  •
                </Text>
                {section.replies} replies
              </Text>
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
