export interface isdata {
  id: string;
  kichHoat: boolean;
  ngayTao: string;
  tenDanhMuc: string;
  thuTu: boolean;
}

export interface ListMenu {
  data: isdata[];
  check: {
    isLoad: boolean;
  };
}
