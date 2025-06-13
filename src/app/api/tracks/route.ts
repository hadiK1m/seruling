// src/app/api/tracks/route.ts
import { NextResponse } from 'next/server';
import { db } from '../../../db';
import { tracks } from '@/db/schema';

export async function GET() {
    try {
        const allTracks = await db.select().from(tracks);
        return NextResponse.json(allTracks, { status: 200 });
    } catch (error: unknown) { // Explicitly set error type to unknown (good practice)
        console.error('Error fetching tracks:', error);

        let errorMessage = 'An unknown error occurred';
        if (error instanceof Error) { // Type narrowing: check if error is an instance of Error
            errorMessage = error.message;
        } else if (typeof error === 'string') { // Also check if it's a string
            errorMessage = error;
        }

        return NextResponse.json(
            { message: 'Failed to fetch tracks', error: errorMessage },
            { status: 500 }
        );
    }
}