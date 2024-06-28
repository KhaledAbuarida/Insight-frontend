import { API_BASE_URL } from "../constants/apiBaseUrl";

export const filterAPI = async (id: number, first: string, second: string) => {
  const response = await fetch(`${API_BASE_URL}/preprocessing/filter-charts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      first,
      second,
    }),
  });

  const data = await response.json();
  return data;
};

export const HistogramAPI = async (id: number, x: string) => {
  const response = await fetch(
    `${API_BASE_URL}/visualization/create-histogram`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        x,
      }),
    }
  );

  const data = await response.json();
  return data;
};
