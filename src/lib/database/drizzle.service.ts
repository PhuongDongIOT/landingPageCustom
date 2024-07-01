import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { env } from '@/config/config'

const { MYSQL_HOST, MYSQL_DATABASE, MYSQL_PORT, MYSQL_PASSWORD, MYSQL_USER } = env
const poolConnection = mysql.createPool({
  host: MYSQL_HOST,
  port: parseInt(MYSQL_PORT) ?? 3306,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

const db = drizzle(poolConnection);

export { db, poolConnection }