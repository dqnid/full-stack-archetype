import { db_query } from "../../db";
import { User } from "./users.types";

class UsersService {
  constructor() {}

  async getAllUsers(): Promise<User[]> {
    const data = await db_query("select * from user");
    const users: User[] = data.map((user: any) => ({
      ...user,
      roles: user.roles.split(";"),
    }));
    return users;
  }

  async getUserByUsername(username: string): Promise<User | null> {
    const data = await db_query(
      `select * from user as user WHERE LOWER(username) = LOWER('${username}');`,
    );
    if (data.length) {
      const user = {
        ...(data[0] as User),
        roles: (data[0] as any).roles.split(";"),
      };
      return user;
    }
    return null;
  }
}

export default UsersService;
