"use client"; // Diperlukan karena ada Button, Slider, AudioSliderDemo, SliderWithStickyLabelDemo

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Plus, Heart, Shuffle, SkipBack, Play, SkipForward, Repeat2, Volume2, VolumeX, Headphones } from "lucide-react";
import AudioSliderDemo from "@/components/slider-08"; // Pastikan path benar
import SliderWithStickyLabelDemo from "@/components/slider-10"; // Pastikan path benar
import * as React from "react"; // Tambahkan import React

export default function NowPlayingPanel() {
    return (
        <main className="flex flex-col h-full bg-background p-6 pt-0">
            {/* Bagian Now Playing yang FIXED */}
            <section className="mb-8 pt-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Now playing</h2>
                <div className="flex flex-col items-center space-y-4 mx-auto max-w-md">
                    <img
                        src="/placeholders/money-machine.jpg"
                        alt="Current Album Cover"
                        className="w-full rounded-md object-cover shadow-lg aspect-square"
                    />
                    <div className="w-full flex justify-between items-center px-2 -mt-2 max-w-sm">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-green-500 hover:bg-transparent">
                            <Plus className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-green-700 hover:bg-transparent">
                            <Heart className="h-5 w-5" />
                        </Button>
                    </div>
                    <p className="text-2xl font-semibold text-center">Money Machine</p>
                    <p className="text-base text-muted-foreground text-center">1000 Gecks</p>

                    {/* Controls Player */}
                    <div className="w-full max-w-lg flex flex-col items-center space-y-4 mx-auto">
                        {/* Progress Bar */}
                        <div className="w-full flex flex-col space-y-1">
                            <AudioSliderDemo />
                        </div>

                        {/* Playback Controls */}
                        <div className="flex items-center space-x-6">
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-muted-foreground hover:bg-muted">
                                <Shuffle className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-muted-foreground hover:bg-muted">
                                <SkipBack className="h-5 w-5" />
                            </Button>
                            <Button variant="primary" size="icon" className="h-14 w-14 rounded-full bg-green-500 text-white hover:bg-green-600 shadow-lg">
                                <Play className="h-7 w-7" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-muted-foreground hover:bg-muted">
                                <SkipForward className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-muted-foreground hover:bg-muted">
                                <Repeat2 className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Volume Control */}
                        <div className="w-full max-w-xs flex items-center space-x-2 text-xs text-muted-foreground mx-auto mt-8">
                            <Volume2 className="h-4 w-4" />
                            <SliderWithStickyLabelDemo />
                            <VolumeX className="h-4 w-4" />
                        </div>
                    </div>

                    {/* Device Indicator */}
                    <div className="text-sm flex items-center space-x-2 mt-4 p-2 px-4 rounded-full border border-green-500 bg-green-50 text-green-700 mx-auto">
                        <Headphones className="h-4 w-4 text-green-700" />
                        <span>Airpods Pro (Dave)</span>
                    </div>
                </div>
            </section>

            {/* Area untuk daftar artis terkait yang bisa di-scroll */}
            <ScrollArea className="flex-1 p-6 pt-0">
                <h3 className="text-xl font-bold mb-4">Related Artists</h3>
                <div className="space-y-4">
                    {[
                        { id: 1, name: "Death Grips", genre: "Experimental Hip Hop", imageUrl: "/placeholders/artist-death-grips.jpg" },
                        { id: 2, name: "Charli XCX", genre: "Hyperpop, Pop", imageUrl: "/placeholders/artist-charli-xcx.jpg" },
                        { id: 3, name: "SOPHIE", genre: "Electronic, Experimental", imageUrl: "/placeholders/artist-sophie.jpg" },
                        { id: 4, name: "Arca", genre: "Experimental Electronic", imageUrl: "/placeholders/artist-arca.jpg" },
                        { id: 5, name: "Bladee", genre: "Cloud Rap", imageUrl: "/placeholders/artist-bladee.jpg" },
                        { id: 6, name: "Drain Gang", genre: "Cloud Rap", imageUrl: "/placeholders/artist-drain-gang.jpg" },
                        { id: 7, name: "Grimes", genre: "Electropop", imageUrl: "/placeholders/artist-grimes.jpg" },
                        { id: 8, name: "Purity Ring", genre: "Dream Pop", imageUrl: "/placeholders/artist-purity-ring.jpg" },
                    ].map((artist) => (
                        <div key={artist.id} className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted cursor-pointer">
                            <img src={artist.imageUrl} alt={artist.name} className="h-12 w-12 rounded-full object-cover" />
                            <div>
                                <p className="font-semibold text-base truncate">{artist.name}</p>
                                <p className="text-sm text-muted-foreground truncate">{artist.genre}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </main>
    );
}