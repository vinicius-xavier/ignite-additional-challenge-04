import Link from "next/link";

import { Flex, Text } from "@chakra-ui/react";

import { Continent } from "~/types";

const CarouselItem = (props: Continent) => {
  const { continent, continent_name, image_url, title } = props;
  return (
    <Link href={`/continents/${continent}`} passHref>
      <Flex
        as="a"
        bg="gray.500"
        height="100%"
        align="center"
        justify="center"
        bgImage={`url(${image_url})`}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        direction="column"
      >
        <Text
          textAlign="center"
          fontSize={["24px", "48px"]}
          fontWeight="700"
          lineHeight={["36px", "72px"]}
          color="gray.200"
        >
          {continent_name}
        </Text>
        <Text
          textAlign="center"
          fontSize={["14px", "24px"]}
          fontWeight="700"
          lineHeight={["21px", "36px"]}
          color="gray.300"
          px={["16", "24"]}
        >
          {title}
        </Text>
      </Flex>
    </Link>
  );
};

export default CarouselItem;
