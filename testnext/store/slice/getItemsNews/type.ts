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

export interface ListMenuNew {
  dataNew: isdataNew[];
  check: {
    isLoad: boolean;
  };
}
