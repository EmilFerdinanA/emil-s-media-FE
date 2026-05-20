import { httpClient } from "@/lib/http-client";

export const loginFacebook = async () => {
  window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v.1/facebook/login`;
};

export const getPages = async (cookieHeader: string): Promise<any> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v.1/facebook/get-pages`,
    {
      method: "GET",
      headers: { Cookie: cookieHeader },
    },
  );
  return response.json();
};

export const schedulePost = async (payload: any): Promise<any> => {
  console.log(Object.fromEntries(payload), "ini miko");
  const response = await httpClient.post(`facebook/schedule-post`, payload);
  return response;
};
