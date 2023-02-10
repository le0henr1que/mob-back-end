import { User } from "../../../types/types";

export interface IListRating {
  executeList(): Promise<any[]>;
}