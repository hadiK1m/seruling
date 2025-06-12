"use client"; // Diperlukan karena ada Button interaktif

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ListMusic } from "lucide-react";
import * as React from "react"; // Tambahkan import React

export default function TrackListPanel() {
    return (
        <ScrollArea className="h-full p-6 pt-6">
            <section>
                <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
                    Track list
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted/50">
                        <ListMusic className="h-4 w-4" />
                    </Button>
                </h2>
                <div className="space-y-3">
                    {[
                        { id: 1, title: "Magazine", artist: "$uicideBoy$", duration: "3:14", imageUrl: "/placeholders/track-magazine.jpg" },
                        { id: 2, title: "Ice Cave II", artist: "Lebanon Hanover", duration: "2:54", imageUrl: "/placeholders/track-ice-cave.jpg" },
                        { id: 3, title: "My Pride", artist: "Sydney Valette", duration: "4:19", imageUrl: "/placeholders/track-my-pride.jpg" },
                        { id: 4, title: "BUTTERFLY EFFECT", artist: "Travis Scott", duration: "4:24", imageUrl: "/placeholders/track-butterfly.jpg" },
                        { id: 5, title: "Milk it", artist: "Nirvana", duration: "3:55", imageUrl: "/placeholders/track-milk-it.jpg" },
                        { id: 6, title: "122 Days", artist: "$uicideBoy$", duration: "4:15", imageUrl: "/placeholders/track-122-days.jpg" },
                        { id: 7, title: "Courtship Dating", artist: "Crystal Castles", duration: "3:48", imageUrl: "/placeholders/track-courtship.jpg" },
                        { id: 8, title: "No Surprises", artist: "Radiohead", duration: "3:48", imageUrl: "/placeholders/track-no-surprises.jpg" },
                        { id: 9, title: "Other Side", artist: "Sydney Valette", duration: "3:24", imageUrl: "/placeholders/track-other-side.jpg" },
                        { id: 10, title: "Dunkelheit", artist: "Burzum", duration: "7:02", imageUrl: "/placeholders/track-dunkelheit.jpg" },
                        { id: 11, title: "Suffocation", artist: "Crystal Castles", duration: "3:41", imageUrl: "/placeholders/track-suffocation.jpg" },
                        { id: 12, title: "Tony Tone", artist: "A$AP Rocky", duration: "4:35", imageUrl: "/placeholders/track-tony-tone.jpg" },
                    ].map((track) => (
                        <div key={track.id} className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted cursor-pointer">
                            <img src={track.imageUrl} alt={track.title} className="h-10 w-10 rounded-md object-cover" />
                            <div className="flex-1">
                                <p className="font-semibold text-sm truncate">{track.title}</p>
                                <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                            </div>
                            <span className="text-xs text-muted-foreground">{track.duration}</span>
                        </div>
                    ))}
                </div>
            </section>
        </ScrollArea>
    );
}