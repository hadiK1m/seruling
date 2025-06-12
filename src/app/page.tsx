// src/app/page.tsx
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

// Import ikon dari lucide-react
import {
  ArrowLeft, ArrowRight, Search, Plus, User,
  Compass, Headphones, Heart, Play, Pause, SkipBack, SkipForward,
  Volume2, Repeat2, Shuffle, ListMusic, MoreVertical, Minus, Settings, ChevronDown, VolumeX
} from "lucide-react";
import AudioSliderDemo from "@/components/slider-08";
import SliderWithStickyLabelDemo from "@/components/slider-10";


export default function DashboardPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Header Aplikasi (Top Bar) */}
      <header className="fixed top-0 left-0 right-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4 md:px-6">
          {/* Bagian Navigasi Kiri Header */}
          <div className="flex items-center space-x-2 mr-auto md:mr-0">
            <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground hover:bg-muted">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground hover:bg-muted">
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Forward</span>
            </Button>
          </div>

          {/* Bagian Search Bar di Tengah Header */}
          <div className="flex-1 flex justify-center px-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search or enter website name"
                className="pl-9 pr-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Konten Utama Aplikasi (Kolom-kolom) */}
      <div className="flex flex-1 pt-16">
        {/* Kolom 1: Sidebar Navigasi Kiri (Fixed) */}
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

        {/* Kontainer untuk ResizablePanelGroup - dimulai setelah sidebar fixed */}
        <div className="flex flex-1 md:ml-20"> {/* Add md:ml-20 to push content after fixed sidebar */}
          <ResizablePanelGroup direction="horizontal" className="h-full items-stretch">
            {/* Kolom 2: Discover Music - Disembunyikan di sm/md, muncul di lg */}
            <ResizablePanel defaultSize={25} minSize={20} maxSize={40} className="overflow-hidden border-r bg-background hidden lg:flex"> {/* hidden lg:flex */}
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
                          <img src={album.imageUrl} alt={album.title} className="w-full h-auto rounded-md mb-2 object-cover aspect-square" />
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
                          <img src={song.imageUrl} alt={song.title} className="h-12 w-12 rounded-md object-cover" />
                          <div>
                            <p className="font-semibold text-base truncate">{song.title}</p>
                            <p className="text-sm text-muted-foreground truncate">{song.artist}, {song.year}</p>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{song.duration}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollArea>
            </ResizablePanel>

            {/* Handle ini hanya muncul di lg ke atas, atau sesuai kebutuhan antara Discover dan Now Playing */}
            <ResizableHandle withHandle className="hidden lg:flex" />

            {/* Kolom 3: Now Playing - Terlihat di semua ukuran, flex-1 di sm/md, defaultSize di lg */}
            <ResizablePanel defaultSize={45} minSize={30} maxSize={70} className="bg-background flex-1"> {/* flex-1 untuk sm/md */}
              <main className="flex flex-col h-full bg-background p-6 pt-0"> {/* border-r dihapus di sini karena sudah di ResizablePanel Group*/}
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
            </ResizablePanel>

            {/* Handle ini hanya muncul di lg ke atas */}
            <ResizableHandle withHandle className="hidden lg:flex" />

            {/* Kolom 4: Track List - Disembunyikan di sm/md, muncul di lg */}
            <ResizablePanel defaultSize={30} minSize={20} maxSize={40} className="overflow-hidden border-l bg-background hidden lg:flex"> {/* hidden lg:flex */}
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
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
}