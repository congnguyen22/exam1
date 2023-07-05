import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./index";

const SelectorsDailyCard = (state) => state?.stateCard || initialState;

export const RegisterDailyCard = createSelector(
  [SelectorsDailyCard],
  (stateCard) => stateCard
);
