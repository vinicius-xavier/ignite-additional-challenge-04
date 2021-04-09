import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";

import { ContinentBannerProps } from "./types";

const ContinentBanner = (props: ContinentBannerProps) => {
  const { src, name } = props;
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      w="100%"
      h={["150px", "500px"]}
      bgImage={`url(${src})`}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      mb="8"
    >
      <Flex
        w="100%"
        maxW={1240}
        align={isWide ? "flex-end" : "center"}
        justify={isWide ? "space-between" : "center"}
        px="10"
        py="10"
        mx="auto"
      >
        <Heading
          fontSize={["28px", "36px"]}
          lineHeight={["42px", "54px"]}
          fontWeight={["600", "500"]}
          color="gray.200"
          mb={isWide ? "4" : "0"}
        >
          {name}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default ContinentBanner;
