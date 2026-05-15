import { httpClient } from "@/lib/http-client";

export const register = async (user: any): Promise<any> => {
  const response = await httpClient.post("register", user);
  return response;
};

export const login = async (user: any): Promise<any> => {
  const response = await httpClient.post("login", user);
  return response;
};
