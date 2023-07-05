export interface ErrorResponse {
  error: number;
  message: string;
}
export interface BaseResponse extends ErrorResponse {
  data: any;
}

// profile
export interface ProfileResponse {
  userId: number;
  role?: number;
  fullname?: string;
  avatar?: string;
  gender?: number;
  date_of_birth?: string;
  shopping_preferences?: number[];
}
export interface CheckProfileResponse {
  error: number;
  message: string;
  data: {
    userId: number;
    role: number;
    fullname: string;
    gender: number;
    avatar: string;
    date_of_birth: string;
    shopping_preferences: number[];
  };
}

// auth - username
export interface CheckUsernameResponse extends ErrorResponse {
  data?: { id: number; telegram_fullname: string; messenger_fullname: string };
}
