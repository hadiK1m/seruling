// src/db/index.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg'; // Import Pool dari 'pg'
import * as schema from '@/db/schema'; // Import seluruh skema yang telah Anda definisikan

// Pastikan DATABASE_URL telah didefinisikan di .env.local Anda
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error('DATABASE_URL is not set in environment variables');
}

// Buat instance Pool untuk koneksi database
const pool = new Pool({
    connectionString: connectionString,
});

// Inisialisasi Drizzle ORM client
export const db = drizzle(pool, { schema });

// Anda bisa menambahkan fungsi untuk menutup pool koneksi saat aplikasi mati (opsional, untuk aplikasi server)
// process.on('beforeExit', async () => {
//   await pool.end();
// });