import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./index";
import { RootState } from "../../../types";

const SelectorsListMenuNew = (state: RootState) =>
  state?.itemsNews || initialState;

export const RegisterListNews = createSelector(
  [SelectorsListMenuNew],
  (itemsNews) => itemsNews?.infoDatanew
);
export const RegisterListNews2 = createSelector(
  [SelectorsListMenuNew],
  (itemsNews) => itemsNews?.dataNew
);
export const RegisterLoadingNew = createSelector(
  [SelectorsListMenuNew],
  (itemsNews) => itemsNews?.check
);
export const RegisterScrollDataNew = createSelector(
  [SelectorsListMenuNew],
  (itemsNews) => itemsNews?.dataWhenScroll
);
