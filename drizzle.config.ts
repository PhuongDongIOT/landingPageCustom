import { defineConfig } from 'drizzle-kit';
import { env } from '@/config/config'

const {MYSQL_HOST, MYSQL_DATABASE, MYSQL_PORT, MYSQL_PASSWORD, MYSQL_USER} = env

export default defineConfig({
  schema: './src/lib/database/databaseSchema.ts',
  out: './drizzle',
  dialect: 'mysql',
  dbCredentials: {
    host: MYSQL_HOST,
    port: parseInt(MYSQL_PORT) ?? 3306,
    user: MYSQL_USER,
    password:  MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  }
})