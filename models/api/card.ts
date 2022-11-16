import { Pagination } from "@models/network";

export interface CardData {
  title?: string;
  name?: string;
  img?: string;
  like?: string;
  view?: string;
}

export interface CardResponse {
  list: CardData[];
  pagination: Pagination;
}

export interface CardRequest {
  size: number;
  curPage: number;
}
