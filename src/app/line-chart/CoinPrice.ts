import { Coin } from "./Coin";

export interface CoinPrice {
  id: number;
  price: string;
  isIncreased: boolean;
  createDate: Date;
  coin: Coin;
}