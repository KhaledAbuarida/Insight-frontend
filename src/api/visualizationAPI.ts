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

export const pieChartAPI = async (
  id: number,
  values: string,
  names: string
) => {
  const response = await fetch(
    `${API_BASE_URL}/visualization/create-pie-chart`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        values,
        names,
      }),
    }
  );

  const data = await response.json();
  return data;
};

export const lineChartAPI = async (id: number, x: string, y: string) => {
  const response = await fetch(
    `${API_BASE_URL}/visualization/create-line-chart`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        x,
        y,
      }),
    }
  );

  const data = await response.json();
  return data;
};

export const barChartAPI = async (id: number, x: string, y: string) => {
  const response = await fetch(
    `${API_BASE_URL}/visualization/create-bar-chart`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        x,
        y,
      }),
    }
  );

  const data = await response.json();
  return data;
};

export const BoxPlotAPI = async (id: number, x: string, y: string) => {
  const response = await fetch(
    `${API_BASE_URL}/visualization/create-box-plot`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        x,
        y,
      }),
    }
  );

  const data = await response.json();
  return data;
};

export const scatterPlotAPI = async (id: number, x: string, y: string) => {
  const response = await fetch(
    `${API_BASE_URL}/visualization/create-scatter-plot`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        x,
        y,
      }),
    }
  );

  const data = await response.json();
  return data;
};
