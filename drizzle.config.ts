// drizzle.config.ts
import type { Config } from "drizzle-kit";

export default {
    schema: "./src/db/schema.ts", // Path to your database schema file
    out: "./drizzle", // Directory for migration files
    dialect: "postgresql", // <--- TAMBAHKAN BARIS INI
    dbCredentials: {
        url: process.env.DATABASE_URL!, // <--- GANTI 'connectionString' menjadi 'url'
    },
} satisfies Config;