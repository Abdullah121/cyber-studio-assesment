import { FetchItemsResponse } from "../types";


export const fetchItems = async (
  page: number = 1,
  limit: number = 10
): Promise<FetchItemsResponse> => {
  const response = await fetch(`/api/items?page=${page}&limit=${limit}`);

  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }

  return response.json();
};
