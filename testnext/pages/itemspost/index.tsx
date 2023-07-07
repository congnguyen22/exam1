import { Box, Center, Flex, Grid, Loader, Text } from "@mantine/core";
import React, { memo, useCallback, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RegisterListNews,
  RegisterScrollDataNew,
} from "../../store/slice/getItemsNews/selector";
import InfiniteScroll from "react-infinite-scroll-component";
import { DailyCardReducerNews } from "../../store/slice/getItemsNews";
import { useRouter } from "next/router";

export interface IRoleFetch {
  cap_don_vi: number;
  loai_nguoi_dung: number;
  ma_so: string;
  ma_phong: string;
  skip: number;
  limit: number;
  tieu_de: string;
  danh_muc_tin_tuc_id: string;
}

const ItemsPost: React.FC = () => {
  const data = useSelector(RegisterScrollDataNew);
  // const dataLength = useSelector(RegisterListMenu);
  const [hasmore, setHasmore] = useState<boolean>(true);
  const [NumberItems, setNumberItems] = useState(8);
  const dispatch = useDispatch();
  const { DailyCardRDucerNews } = DailyCardReducerNews();
  const routes = useRouter();

  const fetchMoreData = useCallback(() => {
    if (data.length >= 96) {
      setHasmore(false);
    } else {
      setHasmore(true);
    }
    const payload: IRoleFetch = {
      cap_don_vi: 4,
      loai_nguoi_dung: 4,
      ma_so: "shn",
      ma_phong: "",
      skip: 0,
      limit: NumberItems + 8,
      tieu_de: "",
      danh_muc_tin_tuc_id: "",
    };

    dispatch(DailyCardRDucerNews.RequestGetScrollListNews(payload));

    setNumberItems(NumberItems + 8);
  }, [NumberItems]);

  useLayoutEffect(() => {
    const payload: IRoleFetch = {
      cap_don_vi: 4,
      loai_nguoi_dung: 4,
      ma_so: "shn",
      ma_phong: "",
      skip: 0,
      limit: NumberItems,
      tieu_de: "",
      danh_muc_tin_tuc_id: "",
    };

    dispatch(DailyCardRDucerNews.RequestGetScrollListNews(payload));
  }, []);

  const handleGetIdNews = (i) => {
    const state = { data: `${data[i].id}` };
    routes.push({
      pathname: "/infoItems",
      query: state,
    });
  };

  return (
    <InfiniteScroll
      hasMore={hasmore}
      scrollThreshold={"100%"}
      dataLength={data.length}
      next={() => fetchMoreData()}
      loader={
        <Center
          sx={{
            margin: "10px 0 40px 0",
            padding: "10px",
            borderRadius: 30,
          }}
        >
          <Loader size={"sm"} color="green" />
        </Center>
      }
      endMessage={
        <Center
          sx={{
            margin: "20px 0",
            padding: "20px",
            background: "rgb(175, 195, 175)",
            borderRadius: 30,
          }}
        >
          <Text> Đã hết dữ liệu </Text>
        </Center>
      }
    >
      <Grid
        sx={{
          display: "flex",
          margin: "0 auto",
          width: "100%",
        }}
        grow
      >
        {data?.slice(4)?.map((v, i) => {
          return (
            <Grid.Col
              onClick={() => handleGetIdNews(i)}
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
              span={3}
            >
              <Flex
                sx={{
                  maxWidth: "300px",
                  width: "100%",
                  justifyContent: "center",
                  height: "400px",
                  background: `url(${v.anhDaiDien})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  objectFit: "contain",
                  position: "relative",
                  borderRadius: "8px",
                  border: "1px solid rgb(101, 100, 100)",
                  ":hover": {
                    boxShadow: "0px 4px 6px 0px rgb(101, 100, 100)",
                  },
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
                    margin: "20px 20px 30px 20px",
                    lineHeight: "14px",
                    background: "rgb(71, 205, 82)",
                    borderRadius: "8px",
                    padding: "5px 5px 5px 5px",
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
                    fontWeight: 900,
                    fontSize: "18px",
                    margin: "20px 20px 30px 20px",
                    lineHeight: "30px",
                  }}
                >
                  {data[i]?.tieuDe}
                </Text>
              </Flex>
            </Grid.Col>
          );
        })}
      </Grid>
    </InfiniteScroll>
  );
};

export default memo(ItemsPost);
