import React, { memo } from "react";
import Home from "..";
import { useDispatch, useSelector } from "react-redux";
import {
  DailyCardRDucer,
  DailyCardReducer,
} from "../../store/slice/getNewsItemList";

const News = () => {
  return (
    <Home>
      <div>Tin tức giáo dục</div>
    </Home>
  );
};

export default memo(News);
