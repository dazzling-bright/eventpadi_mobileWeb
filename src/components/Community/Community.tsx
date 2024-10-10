import { Box, Text, Flex, Icon, HStack } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

const Community: React.FC = () => {
  // List of community categories with posts and replies
  const communitySections = [
    { title: "GENERAL COMMENTS", posts: 33, replies: 25 },
    { title: "FEEDBACK & SUGGESTIONS", posts: 45, replies: 30 },
    { title: "HELP & SUPPORT", posts: 20, replies: 18 },
    { title: "SOCIAL DISCUSSIONS", posts: 50, replies: 40 },
    { title: "ANNOUNCEMENTS", posts: 60, replies: 22 },
  ];

  return (
    <Box p={4}>
      {communitySections.map((section, index) => (
        <Flex
          key={index}
          p={4}
          my={2}
          alignItems="center"
          justifyContent="space-between"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _hover={{ bg: "gray.50" }}
        >
          <HStack spacing={4}>
            <Box>
              <Text fontWeight="bold" fontSize="lg">
                {section.title}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {section.posts} posts • {section.replies} replies
              </Text>
            </Box>
          </HStack>

          {/* Chevron Icon on the far right */}
          <Icon as={FaChevronRight} boxSize={6} color="gray.400" />
        </Flex>
      ))}
    </Box>
  );
};

export default Community;
