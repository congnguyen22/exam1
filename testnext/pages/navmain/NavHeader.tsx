import React, { memo, useLayoutEffect } from "react";
import StyleSheet from "../../styles/header.module.scss";
import { Box, Flex, LoadingOverlay, Text, createStyles } from "@mantine/core";
import { DataLabel } from "./data";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  RegisterListMenu,
  RegisterLoading,
} from "../../store/slice/getNewsItemList/selector";
import { DailyCardReducer } from "../../store/slice/getNewsItemList";
export interface INavLabel {
  id: number;
  label: string;
  link: string;
}
const NavHeader: React.FC = ({ id, label, link }: INavLabel) => {
  const { classes: c } = makeStyles();
  const data = useSelector(RegisterListMenu);
  const { DailyCardRDucer } = DailyCardReducer();
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const payload = {
      loai_nguoi_dung: 4,
      skip: 0,
      limit: 30,
    };
    dispatch(DailyCardRDucer.RequestGetNewsList(payload));
  }, []);

  return (
    <Box className={StyleSheet.containNav}>
      <Box className={StyleSheet.boderTop}></Box>
      <Flex className={StyleSheet.menuContent}>
        {data?.map((v, i) => {
          return (
            <Link href={`/${DataLabel[i].link}`} key={i} className={c.items}>
              <Text className={c.laberNav}>{v.tenDanhMuc}</Text>
            </Link>
          );
        })}
      </Flex>
      <Box className={StyleSheet.borderBottom}></Box>
    </Box>
  );
};
const makeStyles = createStyles((theme) => ({
  items: {
    height: "100%",
    margin: "0px 10px",
    padding: "0px 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    ":hover .mantine-1m2beye": {
      color: "rgb(88, 88, 88)",
      borderBottom: "1px solid rgb(239, 79, 79)",
      transform: "scale(1.05)",
    },
  },
  laberNav: {
    fontWeight: 800,
    fontSize: "19px",
    color: "rgb(88, 88, 88)",
  },
}));

export default memo(NavHeader);
