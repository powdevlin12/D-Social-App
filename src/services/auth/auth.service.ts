import { ILoginParams } from "../../types/params/Auth.response";
import { ILoginData } from "../../types/responses/auth/auth.response";
import apiClient from "../axios/axios";

const login = ({ username, password }: ILoginParams) => {
  return apiClient.post<ILoginData>("/login");
};
const AuthService = {
  login,
};

export default AuthService;
