import { Seller } from "./seller"


export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  sellerDTO: Seller;
}

export type SalePage = {
  content?: Sale[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size?: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty?: boolean;
}

export type SaleSum = {
  sellerName: string;
  sum: number;
}

export type SaleSuccess = {
  sellerName: ScrollSetting;
  visited: number;
  deals: number;
}