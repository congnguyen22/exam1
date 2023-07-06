import { Box, Flex, Text, createStyles } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { memo, useLayoutEffect, useRef } from "react";
import { DailyCardReducer } from "../../store/slice/getNewsItemList";
import { useDispatch, useSelector } from "react-redux";
import { retry } from "redux-saga/effects";
import { DailyCardReducerNews } from "../../store/slice/getItemsNews";
import { RegisterListNews } from "../../store/slice/getItemsNews/selector";
// import { RegisterListNews } from "../../store/slice/getItemsNews/selector";
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
  const data = useSelector(RegisterListNews);
  const { DailyCardRDucerNews } = DailyCardReducerNews();
  const dispatch = useDispatch();

  const slide = data.map((v, i) => {
    return (
      <Carousel.Slide
        sx={{
          border: ".7px solid grey",
          overflow: "hidden",
          borderRadius: "18px",
        }}
        key={i}
      >
        <Flex
          sx={{
            width: "100%",
            height: "100%",
            background: `url(${v.anhDaiDien})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            objectFit: "contain",
            overflow: "hidden",
            borderRadius: "8px",
            position: "relative",
          }}
        >
          <Text
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              color: "white",
              fontWeight: 400,
              fontSize: "12px",
              margin: "30px 30px 40px 30px",
              lineHeight: "30px",
              background: "rgb(131, 126, 126)",
              borderRadius: "8px",
              padding: "5px 10px 5px 10px",
              border: "1px solid grey",
            }}
          >
            {data[i]?.tieuDe}
          </Text>
          <Text
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              color: "white",
              fontWeight: 700,
              fontSize: "30px",
              margin: "30px 30px 40px 30px",
              lineHeight: "30px",
            }}
          >
            {data[i]?.tieuDe}
          </Text>
        </Flex>
      </Carousel.Slide>
    );
  });
  useLayoutEffect(() => {
    const payload = {
      cap_don_vi: 4,
      loai_nguoi_dung: 4,
      ma_so: "shn",
      ma_phong: "",
      skip: 0,
      limit: 12,
      tieu_de: "",
      danh_muc_tin_tuc_id: "",
    };
    dispatch(DailyCardRDucerNews.RequestGetNewsListNews(payload));
  }, []);

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
          sx={{
            ":hover": {
              transform: "scale(1.003)",
              boxShadow: "0px 2px 4px 0px rgb(230, 230, 230) ",
              borderRadius: "18px",
            },
          }}
        >
          {/*  */}
          {slide}
        </Carousel>
      </Flex>
      <Flex className={c.slide2}>
        {["1", "2", "3"].map((v, i) => {
          return (
            <Box
              key={i}
              sx={{
                width: "100%",
                height: "100%",
                background: `url(${data[i + 1]?.anhDaiDien})`,
                backgroundSize: "100% 100%",
                objectFit: "contain",
                backgroundRepeat: "no-repeat",
                margin: "3px 4px 3px 4px",
                border: ".7px solid grey",
                overflow: "hidden",
                borderRadius: "8px",
                position: "relative",
                ":hover": {
                  transform: "scale(1.005)",
                  boxShadow: "0px 2px 4px 0px rgb(230, 230, 230) ",
                },
              }}
            >
              <Text
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  color: "white",
                  fontWeight: 700,
                  fontSize: "20px",
                  margin: "20px",
                  lineHeight: "25px",
                }}
              >
                {data[i]?.tieuDe}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

const makeStyle = createStyles((theme) => ({
  boxSlide: {
    width: "100%",
    height: "100%",
    background: "white",
  },

  slide1: {
    width: "70%",
    height: "100%",
    background: "white",
  },
  slide2: {
    width: "30%",
    height: "100%",
    background: "white",
    flexDirection: "column",
  },
}));

export default memo(CarosuelSlide);
