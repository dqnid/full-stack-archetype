import mysql, { QueryError } from "mysql2/promise";
import { ResponseError } from "./utils/error/response-error.model";

const db_pool = mysql.createPool({
  host: "localhost",
  port: 3307,
  user: "dbuser",
  password: "securepassword",
  database: "path",
});

async function DB_Query<T>(
  query: string,
): Promise<Partial<T>[] | ResponseError> {
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
