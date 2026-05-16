import { httpClient } from "@/lib/http-client";
import { IFanspagesDAO } from "@/interfaces/facebook";

export const loginFacebook = async () => {
  window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v.1/facebook/login`;
};

export const getPages = async (): Promise<IFanspagesDAO> => {
  const response = await httpClient.get("facebook/get-pages");
  return response.data;
};
