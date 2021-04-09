import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

import travelTypesData from "./data";

const TravelTypes = () => {
  const isMedium = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      w="100%"
      maxW={1240}
      align="center"
      justify="space-between"
      mt={["8", "28"]}
      mb={["2", "20"]}
      px="10"
      wrap={isMedium ? "nowrap" : "wrap"}
    >
      {travelTypesData.map(({ icon, title }) => (
        <Flex
          key={title}
          mb="6"
          px="4"
          direction={isMedium ? "column" : "row"}
          align="center"
          mx="auto"
        >
          {isMedium ? (
            <Image src={icon} boxSize="85px" />
          ) : (
            <Box
              boxSize={["8px", "16px"]}
              borderRadius={["4px", "8px"]}
              bgColor="yellow.500"
              mr="2"
            />
          )}
          <Text
            fontSize={["18px", "18px", "21px", "24px"]}
            fontWeight={["500", "600"]}
            lineHeight={["27px", "27px", "32px", "36px"]}
          >
            {title}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default TravelTypes;
