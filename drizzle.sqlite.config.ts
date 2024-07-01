import type {Config} from "drizzle-kit";

export default {
    schema: "./src/lib/lite/databaseSchema.ts",
    out: "./drizzle-lite",
    driver: "turso",
    dialect: 'sqlite',
    dbCredentials: {
        url: "sqlite.db"
    }
} satisfies Config;