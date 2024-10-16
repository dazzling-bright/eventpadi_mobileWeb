import { Box, Heading, Text, Flex, Icon, useTheme } from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
import eventDetails from "../data/eventDetailsData";
import { Link } from "react-router-dom";

const EventDetails: React.FC = () => {
  const theme = useTheme();

  return (
    <Box py={4}>
      {eventDetails.map((item, index) => (
        <Link to={item.hrefLink}>
          <Flex
            key={index}
            borderBottomWidth="1px"
            borderColor={theme.colors.primaryBorderColor}
            color={theme.colors.colorWorkSpace}
            alignItems="center"
            justifyContent="space-between"
            p={4}
            bg={theme.colors.topNavColor}
            transition="background-color 0.3s"
            _hover={{ bg: theme.colors.heroBgColor, cursor: "pointer" }}
          >
            <Flex>
              <Icon
                as={item.icon}
                boxSize={8}
                borderRadius="full"
                color={theme.colors.colorWorkSpace}
                mr={4}
                bg={theme.colors.heroBgColor}
                p={2}
              />
              <Box>
                <Heading fontSize={theme.fontSizes.md}>{item.title}</Heading>
                <Text fontSize={theme.fontSizes.sm} color="#627D98" mt={2}>
                  {item.description} ({item.count})
                </Text>
              </Box>
            </Flex>
            <Icon
              as={MdChevronRight}
              boxSize={8}
              alignSelf="flex-start"
              color={theme.colors.purpleTextColor}
            />
          </Flex>
        </Link>
      ))}
    </Box>
  );
};

export default EventDetails;
