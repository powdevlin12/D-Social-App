import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { IToken } from "../../types/common";

const API_URL = process.env.NEXT_PUBLIC_ENDPOINT_AUTH;

const onRequest = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const tokenStorage = (await AsyncStorage.getItem("token")) as string;
  const tokenObject: IToken = JSON.parse(tokenStorage);
  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${tokenObject.access_token}`;
  } else {
    config.headers = { Authorization: `Bearer ${tokenObject.access_token}` };
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  if (error.response) {
    // Access Token was expired
    if (
      error.response.status === 401 &&
      error.response.data.message === "jwt expired"
    ) {
      const tokenString = (await AsyncStorage.getItem("token")) as string;
      const storedToken: IToken = JSON.parse(tokenString);

      try {
        const rs = await axios.post(`${API_URL}/auth/refresh`, {
          refresh_token: storedToken.refresh_token,
        });

        const { token, user } = rs.data;

        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));

        return;
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
  }
  return Promise.reject(error);
};

export const setupInterceptorsTo = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
