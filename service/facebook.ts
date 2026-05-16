import { httpClient } from "@/lib/http-client";

export const loginFacebook = async () => {
  window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v.1/facebook/login`;
};

export const getPages = async (): Promise<any> => {
  const response = await httpClient.get("facebook/get-pages");
  return response.data;
};
