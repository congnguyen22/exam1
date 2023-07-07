export interface isdataNew {
  id: string;
  tieuDe: string;
  tomTat: string;
  anhDaiDien: string;
  nguoiTao: string;
  ngayTao: string;
  urlChiTiet: string;
  fileDinhKem: [];
}
export interface isInfoDataNew {
  tieuDe: string;
  tomTat: string;
  noiDung: string;
  token?: string;
  anhDaiDien: string;
  ngayTao: string;
  tag: string;
  nguoiTin: string;
  tacGia: string;
  fileDinhKem: [];
}

export interface ListMenuNew {
  dataNew: isdataNew[];
  dataWhenScroll: isdataNew[];
  infoDatanew: isInfoDataNew[];
  totaItems: Number;
  check: {
    isLoad: boolean;
  };
}

export interface IroleSaga {
  cap_don_vi: string | number;
  loai_nguoi_dung: string | number;
  ma_so: string | number;
  ma_phong: string | number;
  skip: string | number;
  limit: string | number;
  tieu_de: string | number;
  danh_muc_tin_tuc_id: string | number;
}
