import { API_BASE_URL } from "../constants/apiBaseUrl";

export const preprocessingAPI = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("check", "numeric");

  const response = await fetch(`${API_BASE_URL}/preprocessing`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { data } = await response.json();
  return data;
};
