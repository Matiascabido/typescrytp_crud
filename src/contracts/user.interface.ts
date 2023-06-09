import { Auth } from "./auth.interface";

export interface User extends Auth {
  name: string;
  lastName: string;
  address: string;
  avatar: string;
}