import { Box, Center, Flex, Stack, Text } from "@mantine/core";
import React, { memo, useLayoutEffect } from "react";
import {
  RegisterListNews,
  RegisterListNews2,
} from "../../../store/slice/getItemsNews/selector";
import { useDispatch, useSelector } from "react-redux";
import { DailyCardReducerNews } from "../../../store/slice/getItemsNews";
import { useRouter } from "next/router";
import { useLocalStorage } from "@mantine/hooks";
export interface IsToken {
  id: string;
}
const InfoCompo: React.FC = () => {
  const data2 = useSelector(RegisterListNews);
  const router = useRouter();
  const { data } = router.query;
  const id = data;
  const dispatch = useDispatch();
  const { DailyCardRDucerNews } = DailyCardReducerNews();

  useLayoutEffect(() => {
    const payload: IsToken = { id: `${id}` };
    dispatch(DailyCardRDucerNews.RequestGetInfoListNews(payload));
  }, []);
  const htmlData: any = data2?.noiDung;
  return (
    <Stack>
      <Center
        sx={{
          maxWidth: "80vw",
          width: "100%",
          marginTop: "41px",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Text
          sx={{
            fontSize: 30,
            fontWeight: 900,
            color: "rgb(83, 83, 84)",
          }}
        >
          {data2?.tieuDe}
        </Text>

        <Text
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "rgb(83, 83, 84)",
            margin: "20px 0 30px 0",
          }}
        ></Text>

        <Text
          sx={{
            fontSize: 16,
            fontWeight: 400,
            color: "rgb(83, 83, 84)",
            margin: "0px 0 30px 0",
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
            dangerouslySetInnerHTML={{ __html: htmlData }}
          />
        </Text>

        <Box
          sx={{
            width: "100%",
            height: "400px",
            margin: "0px auto 100px auto",
            background: `url(${data2.anhDaiDien})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        ></Box>
      </Center>
    </Stack>
  );
};

export default memo(InfoCompo);
