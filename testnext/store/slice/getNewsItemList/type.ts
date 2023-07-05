export interface ChangeStone {
  // snowBall properties
  snowBall: {
    // giá trị của từng quả cầu tuyết
    snowBall_Index: number;
    // giá trị key của từng quả cầu tuyết
    card_Key_Of_SnowBall: number;
    // giá trị của từng stone
    card_Key_Of_Stone: number;
    // giá trị key của từng mặt trước
    get_Card_Key_Face: boolean;
    // lấy giá trị true or false để hiện nút
    card1: boolean;
    card2: boolean;
    card3: boolean;
    card4: boolean;
    // id của từng card khi lấy ra giá trị có thể thay đổi
    idcard1: number;
    idcard2: number;
    idcard3: number;
    idcard4: number;
    // một array chứa các dãy số là index của từng card
    set_index_card: any;
    ref1: any;
    ref2: any;
  };

  // stone properties
  stone?: {
    id: any;
  };
  // card properties
  card?: {
    id?: any;
  };
}

export interface Login {
  id: number;
  // xác định xem người dùng đã đăng nhập rồi hay chưa
  isLogined: boolean;
  // kiểm tra xem người dùng có nhấn vào puên mật khẩu không
  isFogotPW: boolean;
  register: {
    error: number;
    message: string;
  };
  login: {
    error: number;
    message: string;
    savePassword: boolean;
  };
  profile: {
    nickname?: string;
    picture?: string;
    date_of_birth?: string;
    zodiac?: string;
    gender?: string;
  };
}
export interface DailyCardState {
  isFreeCard: boolean;
  getIdCard: any;
  Filter: boolean;
}
export interface ChangeStone {
  // snowBall properties
  snowBall: {
    // giá trị của từng quả cầu tuyết
    snowBall_Index: number;
    // giá trị key của từng quả cầu tuyết
    card_Key_Of_SnowBall: number;
    // giá trị của từng stone
    card_Key_Of_Stone: number;
    // giá trị key của từng mặt trước
    get_Card_Key_Face: boolean;
    // lấy giá trị true or false để hiện nút
    card1: boolean;
    card2: boolean;
    card3: boolean;
    card4: boolean;
    // id của từng card khi lấy ra giá trị có thể thay đổi
    idcard1: number;
    idcard2: number;
    idcard3: number;
    idcard4: number;
    // một array chứa các dãy số là index của từng card
    set_index_card: any;
    ref1: any;
    ref2: any;
  };

  // stone properties
  stone?: {
    id: any;
  };
  // card properties
  card?: {
    id?: any;
  };
}

export interface Login {
  id: number;
  // xác định xem người dùng đã đăng nhập rồi hay chưa
  isLogined: boolean;
  // kiểm tra xem người dùng có nhấn vào puên mật khẩu không
  isFogotPW: boolean;
  register: {
    error: number;
    message: string;
  };
  login: {
    error: number;
    message: string;
    savePassword: boolean;
  };
  profile: {
    nickname?: string;
    picture?: string;
    date_of_birth?: string;
    zodiac?: string;
    gender?: string;
  };
}
export interface DailyCardState {
  isFreeCard: boolean;
  getIdCard: any;
  Filter: boolean;
}
