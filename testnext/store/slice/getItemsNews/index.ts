import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../utils/@reduxjs/toolkit";
import { useInjectReducer } from "../../../utils/redux-injectors";
import { ListMenuNew } from "./type";
import { IsToken } from "../../../pages/infoItems/components/InfoCompo";

export const initialState: ListMenuNew = {
  dataNew: [],
  dataWhenScroll: [],
  infoDatanew: [],
  totaItems: 0,
  check: {
    isLoad: false,
  },
};

const slice = createSlice({
  name: "itemsNews",
  initialState,
  reducers: {
    RequestGetNewsListNews: (state: ListMenuNew, action) => {
      state.check.isLoad = true;
    },
    ResponseGetNewsListNews: (state: ListMenuNew, actions) => {
      state.check.isLoad = false;
      state.dataNew = actions.payload;
    },
    RequestGetInfoListNews: (state: ListMenuNew, action) => {
      state.check.isLoad = true;
    },
    ResponseGetInfoListNews: (state: ListMenuNew, actions) => {
      state.check.isLoad = false;
      state.infoDatanew = actions.payload;
    },
    RequestGetScrollListNews: (state: ListMenuNew, action) => {
      state.check.isLoad = true;
    },
    ResponseGetScrollListNews: (state: ListMenuNew, actions) => {
      state.check.isLoad = false;
      state.dataNew = actions.payload;
      state.dataWhenScroll = actions.payload;
      state.totaItems = actions.payload.length;
    },
  },
});

export const { actions: DailyCardRDucerNews, reducer } = slice;
// cần được gọi lại
export const DailyCardReducerNews: any = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { DailyCardRDucerNews: slice.actions };
};
export const searchReducerNews = reducer;
