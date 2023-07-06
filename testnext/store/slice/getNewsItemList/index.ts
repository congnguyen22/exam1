import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../utils/@reduxjs/toolkit";
import { useInjectReducer } from "../../../utils/redux-injectors";
import { ListMenu } from "./type";

export const initialState: ListMenu = {
  data: [],
  check: {
    isLoad: false,
  },
};

const slice = createSlice({
  name: "stateCard",
  initialState,
  reducers: {
    RequestGetNewsList: (state: ListMenu, action) => {},
    ResponseGetNewsList: (state: ListMenu, actions) => {
      state.data = actions.payload;
    },
  },
});

export const { actions: DailyCardRDucer, reducer } = slice;
// cần được gọi lại
export const DailyCardReducer: any = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { DailyCardRDucer: slice.actions };
};
export const searchReducer = reducer;
