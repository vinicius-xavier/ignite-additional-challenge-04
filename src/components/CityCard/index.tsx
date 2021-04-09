import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";

import { CitiesTop100 } from "~/types";

const CityCard = (props: CitiesTop100) => {
  const { city_name, country_name, country_flag, image_url } = props;
  return (
    <Box
      w="256px"
      minH={279}
      borderWidth="1px"
      borderColor="yellowAlpha.500"
      borderRadius="4px"
      mt={["0", "2"]}
      overflow="hidden"
    >
      <Flex
        w="100%"
        h="173px"
        bgImage={`url(${image_url})`}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
      />
      <Flex align="center" justify="space-between" height="106px" p="6">
        <VStack alignItems="left">
          <Text
            fontFamily="Barlow"
            fontSize="20px"
            fontWeight="600"
            lineHeight="25px"
            textAlign="left"
          >
            {city_name}
          </Text>
          <Text
            fontFamily="Barlow"
            fontSize="16px"
            fontWeight="500"
            lineHeight="26px"
            textAlign="left"
            color="gray.400"
          >
            {country_name}
          </Text>
        </VStack>
        <Avatar src={country_flag} size="sm" />
      </Flex>
    </Box>
  );
};

export default CityCard;
