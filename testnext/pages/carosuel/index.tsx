import { Box, Flex, Text, createStyles } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { memo, useLayoutEffect, useRef } from "react";
import {
  DailyCardRDucer,
  DailyCardReducer,
} from "../../store/slice/getNewsItemList";
import { useLocalStorage } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { retry } from "redux-saga/effects";
import { DailyCardReducerNews } from "../../store/slice/getItemsNews";
import { RegisterListNews2 } from "../../store/slice/getItemsNews/selector";
import { useRouter } from "next/router";
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
  const data = useSelector(RegisterListNews2);
  const { DailyCardRDucerNews } = DailyCardReducerNews();
  const dispatch = useDispatch();
  const routes = useRouter();

  useLayoutEffect(() => {
    const payload = {
      cap_don_vi: 4,
      loai_nguoi_dung: 4,
      ma_so: "shn",
      ma_phong: "",
      skip: 0,
      limit: 10,
      tieu_de: "",
      danh_muc_tin_tuc_id: "",
    };
    dispatch(DailyCardRDucerNews.RequestGetNewsListNews(payload));
  }, []);

  // chuyển qua trang chi tiết bài viết khi nhấn vào từng items một

  const handleGetIdNews = (v) => {
    const state = { data: `${data[v - 2]?.id}` };
    routes.push({
      pathname: "/infoItems",
      query: state,
    });
  };

  const handleItemsNew = () => {
    const state = { data: `${data[0].id}` };
    routes.push({
      pathname: "/infoItems",
      query: state,
    });
  };

  return (
    <Flex className={c.boxSlide}>
      <Flex className={c.slide1}>
        <Carousel
          maw={"100%"}
          onClick={() => handleItemsNew()}
          w={"100%"}
          mx="auto"
          height={"100%"}
          sx={{
            ":hover": {
              transform: "scale(1.003)",
              boxShadow: "0px 2px 4px 0px rgb(230, 230, 230) ",
              borderRadius: "18px",
            },
          }}
        >
          {/*  */}
          <Box
            sx={{
              overflow: "hidden",
              borderRadius: "18px",
              width: "100%",
            }}
          >
            <Flex
              sx={{
                width: "100%",
                height: "100%",
                background: `url(${data[0]?.anhDaiDien})`,
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
                  background: "rgb(71, 205, 82)",
                  borderRadius: "8px",
                  padding: "5px 10px 5px 10px",
                }}
              >
                {data[0]?.tieuDe}
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
                {data[0]?.tieuDe}
              </Text>
            </Flex>
          </Box>
        </Carousel>
      </Flex>
      <Flex className={c.slide2}>
        {["2", "3", "4"].map((v, i) => {
          return (
            <Box
              key={i}
              onClick={() => handleGetIdNews(v)}
              sx={{
                width: "100%",
                height: "100%",
                background: `url(${data[i + 1]?.anhDaiDien})`,
                backgroundSize: "100% 100%",
                objectFit: "contain",
                backgroundRepeat: "no-repeat",
                margin: "3px 4px 3px 4px",
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
    borderRadius: "18px",
    overflow: "hidden",
  },
  slide2: {
    width: "30%",
    height: "100%",
    background: "white",
    flexDirection: "column",
  },
}));

export default memo(CarosuelSlide);
