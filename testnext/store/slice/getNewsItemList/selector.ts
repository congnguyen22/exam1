import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./index";
import { RootState } from "../../../types";

const SelectorsListMenu = (state: RootState) =>
  state?.stateCard || initialState;

export const RegisterListMenu = createSelector(
  [SelectorsListMenu],
  (stateCard) => stateCard?.data
);
export const RegisterLoading = createSelector(
  [SelectorsListMenu],
  (stateCard) => stateCard?.check
);
