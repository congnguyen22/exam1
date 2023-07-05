import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../utils/@reduxjs/toolkit";
import { useInjectReducer } from "../../../utils/redux-injectors";
import { DailyCardState } from "./type";

export const initialState: DailyCardState = {
  isFreeCard: true,
  getIdCard: 0,
  Filter: false,
};

const slice = createSlice({
  name: "stateCard",
  initialState,
  reducers: {
    SetNumberWhenUseCardFree: (state: DailyCardState, action) => {
      console.log(">3");
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
