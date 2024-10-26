import { db_query } from "../../db";
import { User } from "./users.types";

class UserService {
  constructor() {}

  async getAllUsers(): Promise<User[]> {
    const data = await db_query("select * from user where id == 1");
    return data as User[];
  }

  async getUserByUsername(username: string): Promise<User | null> {
    const data = await db_query(
      `select * from user as user WHERE LOWER(username) = LOWER('${username}');`,
    );
    console.log("Data:", data);
    return data.length ? (data[0] as User) : null;
  }

  // getUserById(id: number) {
  //   return new Promise((resolve, reject) =>
  //     db_connection.query("select * from user", (err, rows, fields) => {
  //       console.log(rows);
  //       if (err) {
  //         console.error("Mysql Error on User SELECT: ", err);
  //         reject(err);
  //       } else {
  //         resolve(rows);
  //       }
  //     }),
  //   );
  // }
}

export default UserService;
