import { API_BASE_URL } from "../constants/apiBaseUrl";

interface loginParams {
  email: string;
  password: string;
}
export const loginAPI = async ({ email, password }: loginParams) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();
  return { response: data };
};

interface registerParams {
  name: string;
  email: string;
  password: string;
  confirmation_password: string;
}

export const registerAPI = async ({
  name,
  email,
  password,
  confirmation_password,
}: registerParams) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      confirmation_password,
    }),
  });
  return { status: response.status };
};
