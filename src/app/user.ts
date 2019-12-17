import { UserRole } from "./user-role";

export class User {
  id: number;
  email: string;
  password: string;
  role: UserRole;
}
