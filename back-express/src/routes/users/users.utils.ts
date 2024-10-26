import { User, UserDetailResult } from "./users.types";

// TODO: prettify this
export function sanitize_user(user: User): UserDetailResult {
  delete (user as any).password;
  return user;
}
