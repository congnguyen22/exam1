import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { apiGet, apiPost } from "../../../utils/http/request";
import { AxiosResponse } from "axios";
import { DailyCardRDucer } from ".";
import { ListMenu } from "./type";

function* fetchGetNewsList(action: PayloadAction<ListMenu>) {
  try {
    const { limit, loai_nguoi_dung, skip } = action?.payload;
    const header = "3EC79C17-63ED-4166-BD58-04397B94312C";
    const setLimit = limit ? `&limit=${limit}` : "";
    const setLND = loai_nguoi_dung ? `loai_nguoi_dung=${loai_nguoi_dung}` : "";
    const setSkip = skip == 0 ? `&skip=${skip}` : "";
    const url = `/DanhMucTinTuc/GetDanhSachDanhMucTinTuc?${setLND}${setSkip}${setLimit}`;
    const res: AxiosResponse<ListMenu> = yield call(apiGet, url, header);
    if (res.status == 1) {
      yield put(DailyCardRDucer.ResponseGetNewsList(res.data));
    }
  } catch (error) {}
}

export function* profileSaga() {
  yield takeLatest(DailyCardRDucer.RequestGetNewsList.type, fetchGetNewsList);
}
