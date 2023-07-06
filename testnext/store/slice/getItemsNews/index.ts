import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../utils/@reduxjs/toolkit";
import { useInjectReducer } from "../../../utils/redux-injectors";
import { ListMenuNew } from "./type";

export const initialState: ListMenuNew = {
  dataNew: [],
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
  },
});

export const { actions: DailyCardRDucerNews, reducer } = slice;
// cần được gọi lại
export const DailyCardReducerNews: any = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { DailyCardRDucerNews: slice.actions };
};
export const searchReducerNews = reducer;
