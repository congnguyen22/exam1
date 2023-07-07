import { Box, Center, Stack, Text } from "@mantine/core";
import React, { memo, useLayoutEffect } from "react";
import { RegisterListNews } from "../../../store/slice/getItemsNews/selector";
import { useDispatch, useSelector } from "react-redux";
import { DailyCardReducerNews } from "../../../store/slice/getItemsNews";
import { useRouter } from "next/router";
import { useLocalStorage } from "@mantine/hooks";

const InfoCompo: React.FC = () => {
  const data2 = useSelector(RegisterListNews);
  const router = useRouter();
  const { data } = router.query;
  const dispatch = useDispatch();
  const { DailyCardRDucerNews } = DailyCardReducerNews();
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "token",
    defaultValue: "5m0iC1KHy06chLfft9Mb2A",
  });

  useLayoutEffect(() => {
    dispatch(DailyCardRDucerNews.RequestGetInfoListNews(""));
  }, []);

  console.log(data, "aaaaaaaaa");
  return (
    <Stack>
      <Center
        sx={{
          maxWidth: "80vw",
          width: "100%",
          height: "110vh",
          marginTop: "40px",
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
          Trong ví dụ trên, URL sẽ có dạng /my-page/[id], trong đó [id] là
          segment động trong URL. Khi bạn truy cập vào URL như /my-page/123, giá
          trị 123 trong segment sẽ được truyền vào id
        </Text>

        <Text
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "rgb(83, 83, 84)",
            margin: "30px 0 30px 0",
          }}
        >
          Trong ví dụ trên, URL sẽ có dạng /my-page/[id], trong đó [id] là
          segment động trong URL. Khi bạn truy cập vào URL như /my-page/123, giá
          trị 123 trong segment sẽ được truyền vào id
        </Text>

        <Text
          sx={{
            fontSize: 16,
            fontWeight: 400,
            color: "rgb(83, 83, 84)",
            margin: "0px 0 30px 0",
          }}
        >
          Trong ví dụ trên, URL sẽ có dạng /my-page/[id], trong đó [id] là
          segment động trong URL. Khi bạn truy cập vào URL như /my-page/123, giá
          trị 123 trong segment sẽ được truyền vào idTrong ví dụ trên, URL sẽ có
          dạng /my-page/[id], trong đó [id] là segment động trong URL. Khi bạn
          truy cập vào URL như /my-page/123, giá trị 123 trong segment sẽ được
          truyền vào idTrong ví dụ trên, URL sẽ có dạng /my-page/[id], trong đó
          [id] là segment động trong URL. Khi bạn truy cập vào URL như
          /my-page/123, giá trị 123 trong segment sẽ được truyền vào idTrong ví
          dụ trên, URL sẽ có dạng /my-page/[id], trong đó [id] là segment động
          trong URL. Khi bạn truy cập vào URL như /my-page/123, giá trị 123
          trong segment sẽ được truyền vào idTrong ví dụ trên, URL sẽ có dạng
          /my-page/[id], trong đó [id] là segment động trong URL. Khi bạn truy
          cập vào URL như /my-page/123, giá trị 123 trong segment sẽ được truyền
          vào id
        </Text>

        <Box
          sx={{
            width: "100%",
            height: "400px",
            background: "red",
            marginBottom: "300",
          }}
        ></Box>
      </Center>
    </Stack>
  );
};

export default memo(InfoCompo);
