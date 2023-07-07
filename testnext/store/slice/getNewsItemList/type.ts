export interface isdata {
  id: string;
  kichHoat: boolean;
  ngayTao: string;
  tenDanhMuc: string;
  thuTu: boolean;
}
export interface ISagaType1 {
  limit: string | number;
  loai_nguoi_dung: string | number;
  skip: string | number;
}

export interface ListMenu {
  data: isdata[];
  check: {
    isLoad: boolean;
  };
}
