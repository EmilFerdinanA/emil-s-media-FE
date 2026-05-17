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
