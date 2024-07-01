import { bigint, varchar, mysqlTable, AnyMySqlColumn } from 'drizzle-orm/mysql-core'
import { SQL, sql } from 'drizzle-orm'

const articles = mysqlTable('articles', {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    title: varchar('full_name', { length: 256 }),
    content: varchar('full_name', { length: 256 }),
})

const customers = mysqlTable("customers", {
    id: varchar('id', { length: 256 }).primaryKey().default(sql`(uuid())`),
    firstName: varchar("first_name", { length: 256 }),
    lastName: varchar("last_name", { length: 256 }),
    email: varchar("email", { length: 256 }),
})

export function lower(email: AnyMySqlColumn): SQL {
    return sql`(lower(${email}))`
}

export const databaseSchema = {
    articles,
    customers
}

export { articles, customers }
