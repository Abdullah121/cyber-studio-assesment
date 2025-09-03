export interface Item {
  id: string;
  title: string;
  description: string;
  status:ItemStatus;
}

export interface FetchItemsResponse {
  data: Item[];
  page: number;
  limit: number;
  totalPages: number;
}

export enum ItemStatus {
  Active = "Active",
  Inactive = "Inactive",
}