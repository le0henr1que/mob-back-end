export interface User {
  id?:string;
  name: string;
}
export interface Rating {
  id?: string;
  userId?: string;
  localId?: string;
  score: number;
  createdAt?: Date;
}

export interface Local {
  id?: string;
  name: string;
  rating?: string;
}