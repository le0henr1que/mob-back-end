export interface User {
  name?: string;
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
  rting?: string;
}