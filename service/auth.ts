import { httpClient } from "@/lib/http-client";

export const register = async (user: any): Promise<any> => {
  const response = await httpClient.post("register", user);
  console.log(response, "ini response service");
  return response;
};
