import {
  Flex,
  Image,
  Text,
  Box,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

import { BannerProps } from "./types";

const Banner = (props: BannerProps) => {
  const { src } = props;

  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      h={["163px", "333px"]}
      bgImage={`url(${src})`}
      bgRepeat="no-repeat"
      backgroundPosition="center"
      bgSize="cover"
    >
      <Flex
        w="100%"
        maxW={1240}
        align="center"
        justify="space-between"
        px="10"
        py="10"
        mx="auto"
      >
        <Box mt="4">
          <Heading
            fontSize={["20px", "26px", "36px"]}
            lineHeight={["30px", "42px", "54px"]}
            fontWeight="500"
            color="gray.200"
            mb={["2", "4"]}
            maxW={520}
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text
            fontSize={["14px", "18px", "20px"]}
            lineHeight={["21px", "26px", "30px"]}
            color="gray.200"
            maxW={520}
          >
            Chegou a hora de tirar do papel a viagem,que você sempre sonhou.
          </Text>
        </Box>

        {isWide && (
          <Box w="lg">
            <Image
              src="/assets/airplane.svg"
              transform="translateX(40px) translateY(54px)"
            />
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default Banner;
