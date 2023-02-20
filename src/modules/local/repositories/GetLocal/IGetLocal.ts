import { Local } from "types";

export interface IGetLocal {
  executeGet(): Promise<Local[]>;
}
