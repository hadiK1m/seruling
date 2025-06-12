"use client"; // Diperlukan karena ada Button interaktif

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Compass, Headphones, Heart, Settings } from "lucide-react";
import * as React from "react"; // Tambahkan import React

export default function SidebarDesktop() {
    return (
        <aside className="fixed bottom-0 left-0 top-16 z-20 hidden w-20 flex-col border-r bg-background p-4 md:flex">
            <nav className="flex flex-col space-y-4 items-center">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-lg font-bold">D</div>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-foreground bg-accent hover:bg-accent/80">
                    <Compass className="h-5 w-5" />
                    <span className="sr-only">Discover</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-muted-foreground hover:bg-muted/50 hover:text-foreground">
                    <Headphones className="h-5 w-5" />
                    <span className="sr-only">My Playlists</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-muted-foreground hover:bg-muted/50 hover:text-foreground">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Liked Songs</span>
                </Button>
                <Separator className="my-4 w-1/2" />
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-muted-foreground hover:bg-muted/50 hover:text-foreground">
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                </Button>
                <div className="mt-auto flex justify-center text-muted-foreground text-xs">N</div>
            </nav>
        </aside>
    );
}