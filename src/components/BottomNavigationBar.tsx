"use client"; // Diperlukan untuk komponen interaktif

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Shuffle, SkipBack, Play, Pause, SkipForward, Repeat2,
    Home, LayoutGrid, Search, User
} from "lucide-react";
import Image from "next/image";
import { useState } from "react"; // Untuk state play/pause

// Definisikan tipe props untuk komponen
interface BottomNavigationBarProps {
    currentSong?: { // currentSong adalah opsional
        title: string;
        artist: string;
        imageUrl: string;
    };
}

export default function BottomNavigationBar({ currentSong }: BottomNavigationBarProps) {
    const [isPlaying, setIsPlaying] = useState(false); // Contoh state untuk play/pause

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg lg:hidden">
            {/* Bagian Kontrol Pemutar Mini */}
            <div className="flex items-center h-16 bg-zinc-800 text-white relative px-2"> {/* Tambah px-4 */}
                {/* Gambar dan Judul Lagu */}
                <div className="flex items-center space-x-3 w-48 mr-auto"> {/* Lebar tetap untuk info lagu, mr-auto untuk push controls */}
                    {currentSong ? (
                        <Image
                            src={currentSong.imageUrl}
                            alt={currentSong.title}
                            className="h-10 w-10 rounded-md object-cover flex-shrink-0"
                        />
                    ) : (
                        <div className="h-10 w-10 rounded-md bg-gray-700 flex-shrink-0"></div> // Placeholder jika tidak ada lagu
                    )}
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-sm font-semibold truncate">
                            {currentSong ? currentSong.title : "Not playing"}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                            {currentSong ? currentSong.artist : ""}
                        </p>
                    </div>
                </div>

                {/* Kontrol Tombol Playback (Tetap di tengah relatif terhadap ruang yang tersisa) */}
                <div className="flex items-center justify-center space-x-2"> {/* Gunakan space-x-2 untuk jarak antar tombol */}
                    <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:bg-zinc-700">
                        <Shuffle className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:bg-zinc-700">
                        <SkipBack className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="default"
                        size="icon"
                        className="h-12 w-12 rounded-full bg-green-500 text-white hover:bg-green-600 mx-2"
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                        <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:bg-zinc-700">
                        <SkipForward className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:bg-zinc-700">
                        <Repeat2 className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            <Separator className="bg-gray-700" />

            {/* Bagian Navigasi Utama */}
            <div className="flex justify-around items-center h-20 bg-black text-white">
                <Button variant="ghost" className="flex flex-col items-center justify-center h-full text-green-500">
                    <Home className="h-6 w-6 mb-1" />
                    <span className="text-xs font-semibold">HOME</span>
                </Button>
                <Button variant="ghost" className="flex flex-col items-center justify-center h-full text-gray-400 hover:text-white">
                    <LayoutGrid className="h-6 w-6 mb-1" />
                    <span className="text-xs font-semibold">LIBRARY</span>
                </Button>
                <Button variant="ghost" className="flex flex-col items-center justify-center h-full text-gray-400 hover:text-white">
                    <Search className="h-6 w-6 mb-1" />
                    <span className="text-xs font-semibold">SEARCH</span>
                </Button>
                <Button variant="ghost" className="flex flex-col items-center justify-center h-full text-gray-400 hover:text-white">
                    <User className="h-6 w-6 mb-1" />
                    <span className="text-xs font-semibold">PROFILE</span>
                </Button>
            </div>
        </div>
    );
}