export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
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
export interface ModuleJWT extends Document {
  secret: string;
  expireIn: string;
}