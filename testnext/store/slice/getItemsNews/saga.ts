import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { apiGet, apiPost } from "../../../utils/http/request";
import { AxiosResponse } from "axios";
import {
  DailyCardRDucerNews,
  DailyCardReducerNews,
  searchReducerNews,
} from ".";
import { ListMenuNew } from "./type";

function* fetchGetNewsList(action: PayloadAction<ListMenuNew>) {
  try {
    const {
      cap_don_vi,
      loai_nguoi_dung,
      ma_so,
      ma_phong,
      skip,
      limit,
      tieu_de,
      danh_muc_tin_tuc_id,
    } = action?.payload;
    const iscap_don_vi = cap_don_vi ? `cap_don_vi=${cap_don_vi}` : "";
    const isloai_nguoi_dung = loai_nguoi_dung
      ? `&loai_nguoi_dung=${loai_nguoi_dung}`
      : "";
    const isma_so = ma_so ? `&ma_so=${ma_so}` : "";
    const isma_phong = ma_phong ? `&ma_phong=${ma_phong}` : "";
    const isskip = skip == 0 ? `&skip=${skip}` : "";
    const islimit = limit ? `&limit=${limit}` : "";
    const istieu_de = tieu_de ? `&tieu_de=${tieu_de}` : "";
    const isdanh_muc_tin_tuc_id = danh_muc_tin_tuc_id
      ? `&danh_muc_tin_tuc_id=${danh_muc_tin_tuc_id}`
      : "";
    const header = "3EC79C17-63ED-4166-BD58-04397B94312C";

    const url = `/TinTucHeThong/GetDanhSachTinTuc?${iscap_don_vi}${isloai_nguoi_dung}${isma_so}${isma_phong}${isskip}${islimit}${istieu_de}${isdanh_muc_tin_tuc_id}`;

    const res: AxiosResponse<ListMenuNew> = yield call(apiGet, url, header);
    if (res.status == 1) {
      console.log(res.data);
      yield put(DailyCardRDucerNews.ResponseGetNewsListNews(res.data));
    }
  } catch (error) {}
}

export function* profileSagaNews() {
  yield takeLatest(
    DailyCardRDucerNews.RequestGetNewsListNews.type,
    fetchGetNewsList
  );
}
