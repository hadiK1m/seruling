// src/components/DiscoverMusicPanel.tsx
"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Sparkles, TrendingUp, Music } from "lucide-react";
import * as React from "react";
import Image from "next/image";

// Pastikan Anda telah menambahkan komponen Carousel dari shadcn-ui
// Jalankan: npx shadcn-ui@latest add carousel
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Data dummy untuk demonstrasi
const topCharts = [
    { id: 1, title: "OK Computer", artist: "Radiohead", year: 2001, imageUrl: "/placeholders/radiohead-ok-computer.jpg" },
    { id: 2, title: "In Rainbows", artist: "Radiohead", year: 2007, imageUrl: "/placeholders/radiohead-in-rainbows.jpg" },
    { id: 3, title: "The Division Bell", artist: "Pink Floyd", year: 1994, imageUrl: "/placeholders/pink-floyd-the-division-bell.jpg" },
    { id: 4, title: "Crystal Castles I", artist: "Crystal Castles", year: 2008, imageUrl: "/placeholders/crystal-castles-i.jpg" },
    { id: 5, title: "Untrue", artist: "Burial", year: 2007, imageUrl: "/placeholders/radiohead-ok-computer.jpg" },
    { id: 6, title: "Dummy", artist: "Portishead", year: 1994, imageUrl: "/placeholders/artist-death-grips.jpg" },
    { id: 7, title: "Massive Attack - Mezzanine", artist: "Massive Attack", year: 1998, imageUrl: "/placeholders/radiohead-ok-computer.jpg" },
    { id: 8, title: "Daft Punk - Discovery", artist: "Daft Punk", year: 2001, imageUrl: "/placeholders/radiohead-ok-computer.jpg" },
];

const recommendedSongs = [
    { id: 1, title: "Static", artist: "Godspeed You, Black Emperor!", year: 2001, duration: "22:36", imageUrl: "/placeholders/song-static.jpg" },
    { id: 2, title: "Empathy", artist: "Crystal Castles", year: 2014, duration: "4:16", imageUrl: "/placeholders/song-empathy.jpg" },
    { id: 3, title: "Magazine", artist: "Magazine", year: 2018, duration: "3:14", imageUrl: "/placeholders/song-magazine.jpg" },
    { id: 4, title: "Archangel", artist: "Burial", year: 2007, duration: "5:30", imageUrl: "/placeholders/artist-death-grips.jpg" },
    { id: 5, title: "Sour Times", artist: "Portishead", year: 1994, duration: "4:00", imageUrl: "/placeholders/artist-death-grips.jpg" },
    { id: 6, title: "Blue Monday", artist: "New Order", year: 1983, duration: "7:29", imageUrl: "/placeholders/artist-death-grips.jpg" },
];

const trendingArtists = [
    { id: 1, name: "Death Grips", genre: "Experimental Hip Hop", imageUrl: "/placeholders/artist-death-grips.jpg" },
    { id: 2, name: "Charli XCX", genre: "Hyperpop, Pop", imageUrl: "/placeholders/artist-charli-xcx.jpg" },
    { id: 3, name: "SOPHIE", genre: "Electronic, Experimental", imageUrl: "/placeholders/artist-sophie.jpg" },
    { id: 4, name: "Arca", genre: "Experimental Electronic", imageUrl: "/placeholders/artist-arca.jpg" },
    { id: 5, name: "Bladee", genre: "Cloud Rap", imageUrl: "/placeholders/artist-bladee.jpg" },
];

export default function DiscoverMusicPanel() {
    return (
        <ScrollArea className="h-full p-6 pt-0">
            <section className="mb-8 pt-6">
                <h1 className="text-3xl font-bold mb-4">Discover New Music</h1>

                {/* Filter dan Top-chart */}
                <div className="flex items-center space-x-4 mb-6">
                    <span className="text-lg font-semibold">Top-chart</span>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="px-2 py-1 text-muted-foreground hover:bg-muted/50">
                                Week <ChevronDown className="ml-1 h-3 w-3" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Day</DropdownMenuItem>
                            <DropdownMenuItem>Week</DropdownMenuItem>
                            <DropdownMenuItem>Month</DropdownMenuItem>
                            <DropdownMenuItem>Year</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                {/* Perubahan di sini: sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    {topCharts.slice(0, 6).map((album) => (
                        <Card key={album.id} className="w-full h-auto bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            <CardContent className="p-3">
                                <Image
                                    width={192} height={192}
                                    src={album.imageUrl} alt={album.title} className="w-full h-auto rounded-md mb-2 object-cover aspect-square" />
                                <p className="text-sm font-semibold truncate">{album.title}</p>
                                <p className="text-xs text-muted-foreground truncate">{album.artist}, {album.year}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <Separator className="my-8" />

            {/* Bagian Baru: New Releases - Diubah menjadi carousel horizontal */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    {/* <Sparkles className="h-6 w-6 mr-2 text-yellow-500" />  */}
                    New Releases
                </h2>
                {/* Pastikan Carousel, CarouselContent, CarouselItem, dll. sudah diimpor */}
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 max-w-96">
                        {topCharts.map((album) => (
                            <CarouselItem key={`new-release-${album.id}`} className="pl-4 basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/3">
                                <div className="p-1">
                                    <Card className="h-full bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                        <CardContent className="flex flex-col items-center justify-center p-3">
                                            <Image
                                                width={192}
                                                height={192}
                                                src={album.imageUrl}
                                                alt={album.title}
                                                className="w-full h-auto rounded-md mb-2 object-cover aspect-square"
                                            />
                                            <p className="text-sm font-semibold truncate text-center w-full">{album.title}</p>
                                            <p className="text-xs text-muted-foreground truncate text-center w-full">{album.artist}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>

            <Separator className="my-8" />

            {/* Bagian Baru: Trending Artists - Diubah menjadi carousel horizontal juga */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    {/* <TrendingUp className="h-6 w-6 mr-2 text-blue-500" /> */}
                    Trending Artists
                </h2>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 max-w-96">
                        {trendingArtists.map((artist) => (
                            <CarouselItem key={artist.id} className="pl-4  basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/3">
                                <div className="p-1">
                                    <Card className="h-full bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                        <CardContent className="p-3 flex flex-col items-center text-center">
                                            <Image
                                                width={128}
                                                height={128}
                                                src={artist.imageUrl}
                                                alt={artist.name}
                                                className="rounded-full w-24 h-24 sm:w-28 sm:h-28 object-cover mb-2"
                                            />
                                            <p className="font-semibold text-base truncate w-full">{artist.name}</p>
                                            <p className="text-xs text-muted-foreground truncate w-full">{artist.genre}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>

            <Separator className="my-8" />

            {/* Bagian "You may like" yang disempurnakan */}
            <section className="pb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Music className="h-6 w-6 mr-2 text-purple-500" /> Recommended For You
                </h2>
                <div className="space-y-4">
                    {recommendedSongs.map((song) => (
                        <div key={song.id} className="flex items-center justify-between p-3 rounded-md hover:bg-muted cursor-pointer transition-colors">
                            <div className="flex items-center space-x-4">
                                <Image
                                    width={64} height={64}
                                    src={song.imageUrl} alt={song.title} className="rounded-md w-16 h-16 object-cover flex-shrink-0" />
                                <div className="flex flex-col overflow-hidden">
                                    <p className="font-semibold text-base truncate">{song.title}</p>
                                    <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                                </div>
                            </div>
                            <span className="text-sm text-muted-foreground">{song.duration}</span>
                        </div>
                    ))}
                </div>
            </section>
        </ScrollArea>
    );
}