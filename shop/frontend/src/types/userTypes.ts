export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  contact: string;
  address?: string;
  emailVerified: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
}
