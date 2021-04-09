import { Box, useBreakpointValue } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import CarouselItem from "./CarouselItem";
import { CarouselProps } from "./types";

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const Carousel = (props: CarouselProps) => {
  const { continents } = props;
  const isMedium = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <Box maxW={1240} w="100%" m="auto">
      <Swiper
        pagination={{ clickable: true }}
        navigation
        slidesPerView={1}
        spaceBetween={0}
        loop
        style={{
          height: isMedium ? "450px" : "250px",
        }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <CarouselItem {...continent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
