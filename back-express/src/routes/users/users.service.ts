import { db_connection, db_query } from "../../db";

class UserService {
  constructor() {}

  async getTestUsers() {
    const data = await db_connection.execute("select * from user");
    return data;
  }

  async getAllUsers() {
    try {
      const data = await db_query("select * from user where user.id == 3");
      return { value: data, example: "algo" };
    } catch (e) {
      return e;
    }
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
