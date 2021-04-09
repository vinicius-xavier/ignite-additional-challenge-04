import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import * as C from "~/components";
import { continentsData } from "~/data";

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

export default function Home() {
  return (
    <>
      <C.MetaTags />
      <Flex w="100vw" minH="100vh" align="center" direction="column">
        <C.Banner src="/assets/headerBg.jpg" />
        <C.TravelTypes />
        <Box mb="12">
          <Divider
            w={["60px", "90px"]}
            borderWidth="1px"
            borderColor="gray.600"
          />
        </Box>
        <Box>
          <Text
            textAlign="center"
            fontSize={["20px", "36px"]}
            fontWeight="500"
            lineHeight={["30px", "54px"]}
          >
            Vamos nessa?
            <br />
            Então escolha seu continente
          </Text>
        </Box>
        <Flex w="100%" mt={["6", "12"]} mb={["10", "20"]}>
          <C.Carousel continents={continentsData} />
        </Flex>
      </Flex>
    </>
  );
}
