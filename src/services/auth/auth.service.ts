import { ILoginParams } from "../../types/params/Auth.response";
import { ILoginData } from "../../types/responses/auth/auth.response";
import apiClient from "../axios/axios";

export const UrlEndPoint = "auth";
class AuthService {
  login = async ({ username, password }: ILoginParams) => {
    const response = await apiClient.post<ILoginData>(`${UrlEndPoint}/login`);
    return response.data;
  };
}

const authService = new AuthService();

export default authService;
