import { httpClient } from "@/lib/http-client";
import { IFanspagesDAO } from "@/interfaces/facebook";

export const register = async (user: any): Promise<any> => {
  const response = await httpClient.post("register", user);
  return response;
};

export const login = async (user: any): Promise<any> => {
  const response = await httpClient.post("login", user);
  return response;
};

export const loginFacebook = async () => {
  window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v.1/login-facebook`;
};

export const getPages = async (): Promise<IFanspagesDAO> => {
  const response = await httpClient.get("facebook/get-pages");
  return response.data;
};
