// src/db/schema.ts
// src/db/schema.ts
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

// Tabel Users
export const users = pgTable('users', {
    id: serial('id').primaryKey(), // Primary key otomatis naik
    clerkId: varchar('clerk_id', { length: 256 }).unique().notNull(), // ID dari Clerk (untuk autentikasi)
    email: text('email').notNull(), // Email pengguna
    username: text('username').notNull(), // Username pengguna
    createdAt: timestamp('created_at').defaultNow().notNull(), // Waktu pembuatan record
    updatedAt: timestamp('updated_at').defaultNow().notNull(), // Waktu update record
});

// Tabel Tracks (Lagu)
export const tracks = pgTable('tracks', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    artist: text('artist').notNull(),
    album: text('album'), // Album opsional
    genre: text('genre'), // Genre opsional
    releaseYear: text('release_year'), // Tahun rilis
    durationSeconds: text('duration_seconds'), // Durasi dalam detik (untuk memudahkan format di frontend)
    // pathToFile: text('path_to_file').unique().notNull(), // Path ke file audio lokal
    // imageUrl: text('image_url'), // URL ke gambar album/track
    // Karena penyimpanan lokal dan aman, kita bisa membuat path yang lebih dinamis.
    // Untuk awal, kita akan asumsikan path relatif atau nama file.
    // Misalnya, jika file disimpan di `public/audio` dan `public/images`
    audioFileName: text('audio_file_name').notNull(), // Nama file audio (misal: "song.mp3")
    imageFileName: text('image_file_name'), // Nama file gambar (misal: "album_cover.jpg")
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Tabel untuk menyimpan lagu-lagu yang disukai pengguna
export const likedSongs = pgTable('liked_songs', {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(), // Menggunakan ClerkId dari users
    trackId: serial('track_id').notNull(), // ID lagu dari tabel tracks
    createdAt: timestamp('created_at').defaultNow().notNull(),
});