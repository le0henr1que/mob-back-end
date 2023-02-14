import { Local } from "../../../../types/types";

export interface ICreateLocal {
  executeCreate(dataLocal: Local): Promise<Local>;
}
