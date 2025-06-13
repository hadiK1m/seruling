"use client"; // Diperlukan karena ada DropdownMenu, Button, Card

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import * as React from "react"; // Tambahkan import React
import Image from "next/image";

export default function DiscoverMusicPanel() {
    return (
        <ScrollArea className="h-full p-6 pt-0">
            <section className="mb-8 pt-6">
                <h1 className="text-3xl font-bold mb-4">Discover New music</h1>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { id: 1, title: "OK Computer", artist: "Radiohead", year: 2001, imageUrl: "/placeholders/radiohead-ok-computer.jpg" },
                        { id: 2, title: "In Rainbows", artist: "Radiohead", year: 2007, imageUrl: "/placeholders/radiohead-in-rainbows.jpg" },
                        { id: 3, title: "The Division Bell", artist: "Pink Floyd", year: 1994, imageUrl: "/placeholders/pink-floyd-the-division-bell.jpg" },
                        { id: 4, title: "Crystal Castles I", artist: "Crystal Castles", year: 2008, imageUrl: "/placeholders/crystal-castles-i.jpg" },
                    ].map((album) => (
                        <Card key={album.id} className="w-full h-auto bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-3">
                                <Image
                                    width={220}
                                    height={100}
                                    src={album.imageUrl} alt={album.title} className="w-full h-auto rounded-md mb-2 object-cover aspect-square" />
                                <p className="text-sm font-semibold truncate">{album.title}</p>
                                <p className="text-xs text-muted-foreground truncate">{album.artist}, {album.year}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <Separator className="my-8" />

            <section className="pb-8">
                <h2 className="text-2xl font-bold mb-4">You may like</h2>
                <div className="space-y-4">
                    {[
                        { id: 1, title: "Static", artist: "Godspeed You, Black Emperor!", year: 2001, duration: "22:36", imageUrl: "/placeholders/song-static.jpg" },
                        { id: 2, title: "Empathy", artist: "Crystal Castles", year: 2014, duration: "4:16", imageUrl: "/placeholders/song-empathy.jpg" },
                        { id: 3, title: "Magazine", artist: "Magazine", year: 2018, duration: "3:14", imageUrl: "/placeholders/song-magazine.jpg" },
                    ].map((song) => (
                        <div key={song.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer">
                            <div className="flex items-center space-x-4">
                                <Image
                                    width={50}
                                    height={60}
                                    src={song.imageUrl} alt={song.title} className="rounded-full w-12 h-12 object-cover" />
                                <div>
                                    <ScrollArea className=" w-[240px] p-4">
                                        <p className="font-semibold text-base truncate">{song.title}</p>
                                        <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                                        <p className="text-sm text-muted-foreground truncate">{song.year}</p>

                                    </ScrollArea>
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