import React, { memo } from "react";
import Home from "..";
import { useDispatch, useSelector } from "react-redux";
import {
  DailyCardRDucer,
  DailyCardReducer,
} from "../../store/slice/getNewsItemList";

const News = () => {
  const { DailyCardRDucer } = DailyCardReducer();
  const dispatch = useDispatch();
  const fca = () => {
    console.log("hi");
    dispatch(DailyCardRDucer.SetNumberWhenUseCardFree(false));
  };
  return (
    <Home>
      <div onClick={() => fca()}>news</div>
    </Home>
  );
};

export default memo(News);
