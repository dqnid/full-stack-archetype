export enum Role {
  Public = "public",
  User = "user",
  Manager = "manager",
  Admin = "admin",
}

export type User = {
  id: number;
  username: string;
  password: string;
  roles: Role[];
  picture: string;
};
