import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { apiGet, apiPost } from "../../../utils/http/request";
import { AxiosResponse } from "axios";
import { DailyCardRDucer } from ".";

function* handleGetProfile() {
  try {
    console.log("yesssss");
  } catch (error) {}
}

export function* profileSaga() {
  yield takeLatest(
    DailyCardRDucer.SetNumberWhenUseCardFree.type,
    handleGetProfile
  );
}
