export interface User {
  id?: string;
  name?: string;
  email: string;
  password?: string;
  token?: string;
  accepted_terms?:boolean;
}
export interface Rating {
  id?: string;
  userId?: string;
  localId?: string;
  rating: number;
  createdAt?: Date;
}

export interface Local {
  id?: string;
  name: string;
  category?:string;
  rating?: string;
}
export interface ModuleJWT extends Document {
  secret: string;
  expireIn: string;
}
