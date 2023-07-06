import axios from "axios";
import { BaseResponse } from "./response";

const baseDomain = "http://api-tintuc.enetviet.com";

export const apiGet = async (url: string, headers: any) => {
  try {
    url = baseDomain + url;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: headers,
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
    } else {
    }
    const response: BaseResponse = {
      data: undefined,
      error: 1,
      message: "system_error",
    };
    return response;
  }
};

export const apiPost = async (url: string, payload: any, header: any) => {
  try {
    url = baseDomain + url;
    const { data } = await axios.post<BaseResponse>(url, payload, {
      headers: header,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
    } else {
    }
    const response: BaseResponse = {
      data: undefined,
      error: 1,
      message: "system_error",
    };
    return response;
  }
};
