import { Box, Flex, createStyles } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { memo, useRef } from "react";
export interface ISlideHead {
  id: string;
  tenDanhMuc: string;
  thuTu: number;
  kichHoat: boolean;
  sngayTao: string;
}
const CarosuelSlide: React.FC = ({
  id,
  tenDanhMuc,
  thuTu,
  kichHoat,
  sngayTao,
}: ISlideHead) => {
  const { classes: c } = makeStyle();
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <Flex className={c.boxSlide}>
      <Flex className={c.slide1}>
        <Carousel
          maw={"100%"}
          w={"100%"}
          mx="auto"
          withIndicators
          height={"100%"}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          <Carousel.Slide>
            <Flex
              sx={{
                width: "100%",
                height: "100%",
                background: "red",
              }}
            ></Flex>
          </Carousel.Slide>
          <Carousel.Slide>
            <Flex
              sx={{
                width: "100%",
                height: "100%",
                background: "green",
              }}
            ></Flex>
          </Carousel.Slide>
          <Carousel.Slide>
            <Flex
              sx={{
                width: "100%",
                height: "100%",
                background: "blue",
              }}
            ></Flex>
          </Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
      </Flex>
      <Flex className={c.slide2}>
        <Box className={c.boxSlide1}></Box>
        <Box className={c.boxSlide2}></Box>
        <Box className={c.boxSlide3}></Box>
      </Flex>
    </Flex>
  );
};

const makeStyle = createStyles((theme) => ({
  boxSlide: {
    width: "100%",
    height: "100%",
    background: "pink",
  },

  slide1: {
    width: "70%",
    height: "100%",
    background: "black",
  },
  slide2: {
    width: "30%",
    height: "100%",
    background: "pink",
    flexDirection: "column",
  },

  boxSlide1: {
    width: "100%",
    height: "100%",
    background: "orange",
  },
  boxSlide2: {
    width: "100%",
    height: "100%",
    background: "black",
  },
  boxSlide3: {
    width: "100%",
    height: "100%",
    background: "pink",
  },
}));

export default memo(CarosuelSlide);
