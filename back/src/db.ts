import mysql, { QueryError } from "mysql2/promise";
import { ResponseError } from "./utils/response/response-error.model";

const db_pool = mysql.createPool({
  host: process.env.DB_HOST ?? "localhost",
  port: parseInt(process.env.DB_PORT ?? "3307"),
  user: process.env.DB_USERNAME ?? "dbuser",
  password: process.env.DB_PASSWORD ?? "securepassword",
  database: process.env.DB_MAIN ?? "path",
});

async function DB_Query<T>(query: string): Promise<Partial<T>[]> {
  try {
    const [results, _fields] = await db_pool.query(query);
    return results as T[];
  } catch (e) {
    const queryError = e as QueryError;
    throw new ResponseError({
      code: queryError.code,
      number: queryError.errno,
      detail: queryError.message,
    });
  }
}

export { db_pool as db_connection, DB_Query as db_query };
