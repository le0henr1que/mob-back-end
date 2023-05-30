export interface User {
  id?: string;
  name?: string;
  email: string;
  password?: string;
  picture?: string;
  token?: string;
  accepted_terms?: boolean;
  cookieConsent?: boolean;
  authorization?: string;
  confirmed_email?: boolean;
}

export interface Comment {
  id?: string;
  comment_text?: string;
  ratingId?: string;
  title?: string;
  // createdAt?: string;
  // rating?: string[];
}

export interface Blacklist {
  id?: string;
  token: string;
  exp: Date;
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
  categoryId?: number;
  subcategoryId?: number | null;
  rating?: string;
  address?: Address;
  addressId?: string;
  // subcategoryId?:number;
  // categoryId?:number;
}
export interface PasswordResetRequest {
  id?: string;
  token: string;
  userId: string;
  codeChallenge?: string;
  created_at?: Date;
  updated_at?: Date;
  user?: User;
  status?: string;
}
export interface Category {
  id?: number;
  name: String;
  subcategory?: Subcategory[];
  local?: Local;
}

export interface Subcategory {
  id?: number;
  name: String;
  catergory?: Category;
  local?: Local;
}
