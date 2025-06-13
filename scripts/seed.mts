/* eslint-disable @typescript-eslint/no-unused-vars */
// scripts/seed.ts
import { db } from '@/db'; // Impor instance db Anda
import { tracks, users } from '@/db/schema'; // Impor definisi skema Anda
import { eq } from 'drizzle-orm'; // Import eq untuk where clause (jika diperlukan untuk update/delete)

// Data dummy untuk Tracks
const initialTracks = [
    {
        title: 'Money Machine',
        artist: '1000 Gecs',
        album: '1000 Gecs',
        genre: 'Hyperpop',
        releaseYear: '2019',
        durationSeconds: '110', // 1:50
        audioFileName: 'money_machine.mp3', // Pastikan Anda memiliki file ini di public/audio
        imageFileName: 'money_machine.jpg', // Pastikan Anda memiliki file ini di public/images
    },
    {
        title: 'OK Computer',
        artist: 'Radiohead',
        album: 'OK Computer',
        genre: 'Alternative Rock',
        releaseYear: '1997',
        durationSeconds: '277', // 4:37 (contoh)
        audioFileName: 'ok_computer_audio.mp3',
        imageFileName: 'radiohead-ok-computer.jpg',
    },
    {
        title: 'In Rainbows',
        artist: 'Radiohead',
        album: 'In Rainbows',
        genre: 'Art Rock',
        releaseYear: '2007',
        durationSeconds: '341', // 5:41 (contoh)
        audioFileName: 'in_rainbows_audio.mp3',
        imageFileName: 'radiohead-in-rainbows.jpg',
    },
    {
        title: 'The Division Bell',
        artist: 'Pink Floyd',
        album: 'The Division Bell',
        genre: 'Progressive Rock',
        releaseYear: '1994',
        durationSeconds: '422', // 7:02 (contoh)
        audioFileName: 'division_bell_audio.mp3',
        imageFileName: 'pink-floyd-the-division-bell.jpg',
    },
    {
        title: 'Crystal Castles I',
        artist: 'Crystal Castles',
        album: 'Crystal Castles',
        genre: 'Electronic',
        releaseYear: '2008',
        durationSeconds: '210', // 3:30 (contoh)
        audioFileName: 'crystal_castles_i_audio.mp3',
        imageFileName: 'crystal-castles-i.jpg',
    },
    {
        title: 'Untrue',
        artist: 'Burial',
        album: 'Untrue',
        genre: 'Dubstep, Electronic',
        releaseYear: '2007',
        durationSeconds: '360', // 6:00 (contoh)
        audioFileName: 'untrue_audio.mp3',
        imageFileName: 'burial-untrue.jpg',
    },
    {
        title: 'Dummy',
        artist: 'Portishead',
        album: 'Dummy',
        genre: 'Trip Hop',
        releaseYear: '1994',
        durationSeconds: '260', // 4:20 (contoh)
        audioFileName: 'dummy_audio.mp3',
        imageFileName: 'portishead-dummy.jpg',
    },
];

async function seed() {
    console.log('Starting seeding process...');
    try {
        // OPSIONAL: Hapus semua data yang ada sebelum seeding baru
        console.log('Clearing existing data...');
        await db.delete(tracks);
        // await db.delete(users); // Hati-hati jika users sudah punya data penting

        // Masukkan data Tracks
        console.log('Inserting initial tracks...');
        await db.insert(tracks).values(initialTracks);
        console.log('Tracks seeded successfully!');

        // OPSIONAL: Masukkan data user dummy jika diperlukan untuk testing
        // const initialUsers = [
        //   { clerkId: 'user_clerk_id_1', email: 'test1@example.com', username: 'testuser1' },
        //   { clerkId: 'user_clerk_id_2', email: 'test2@example.com', username: 'testuser2' },
        // ];
        // console.log('Inserting initial users...');
        // await db.insert(users).values(initialUsers);
        // console.log('Users seeded successfully!');

    } catch (error) {
        console.error('Error during seeding:', error);
        process.exit(1); // Keluar dengan kode error
    } finally {
        // Penting: Tutup pool koneksi database setelah seeding selesai
        // Karena `db` diinisialisasi dengan `Pool`, Anda harus menutupnya
        // Untuk melakukan ini, Anda mungkin perlu mengekspor `pool` dari `src/db/index.ts`
        // Atau, pastikan proses Node.js selesai secara otomatis.
        // Untuk skrip, process.exit(0) akan menutupnya.
        console.log('Seeding process finished.');
        process.exit(0); // Keluar dengan sukses
    }
}

seed();