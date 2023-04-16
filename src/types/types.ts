export interface User {
  id?: string;
  name?: string;
  email: string;
  password?: string;
  token?: string;
  accepted_terms?: boolean;
}

export interface Comment {
  id?: string;
  comment_text?: string;
  commentId?: string;
  title?: string;
  createdAt?: string;
  rating?: string[];
}

export interface Rating {
  id?: string;
  userId?: string;
  localId?: string;
  comment?: Comment;
  // commentId?:string;
  rating: number;
  createdAt?: Date;
}

export interface ModuleJWT extends Document {
  secret: string;
  expireIn: string;
}

export interface Address {
  id?: string;
  cep?: string;
  complement?: string;
  number?: string;
  logradouro?: string;
  bairro?: string;
  city?: string;
  state?: string;
  local?: any;
}
export interface Local {
  id?: string;
  name: string;
  category?: string;
  rating?: string;
  address?: Address;
  addressId?: string;
}
