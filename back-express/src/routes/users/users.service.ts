import { db_query } from "../../db";
import { User } from "./users.types";

class UsersService {
  constructor() {}

  async getAllUsers(): Promise<User[]> {
    const data = await db_query("select * from user");
    return data as User[];
  }

  async getUserByUsername(username: string): Promise<User | null> {
    const data = await db_query(
      `select * from user as user WHERE LOWER(username) = LOWER('${username}');`,
    );
    console.log("Data:", data);
    return data.length ? (data[0] as User) : null;
  }
}

export default UsersService;
