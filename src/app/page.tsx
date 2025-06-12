// src/app/page.tsx
import { cn } from "@/lib/utils"; // cn masih dibutuhkan untuk body
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import SidebarDesktop from "@/components/SidebarDesktop";
import DiscoverMusicPanel from "@/components/DiscoverMusicPanel";
import NowPlayingPanel from "@/components/NowPlayingPanel";
import TrackListPanel from "@/components/TrackListPanel";
import Header from "@/components/Header";

// Import komponen-komponen yang telah diekstrak



export default function DashboardPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />

      {/* Konten Utama Aplikasi (Kolom-kolom) */}
      <div className="flex flex-1 pt-16">
        <SidebarDesktop />

        {/* Kontainer untuk ResizablePanelGroup - dimulai setelah sidebar fixed */}
        <div className="flex flex-1 md:ml-20">
          <ResizablePanelGroup direction="horizontal" className="h-full items-stretch">
            {/* Kolom 2: Discover Music - Disembunyikan di sm/md, muncul di lg */}
            <ResizablePanel defaultSize={25} minSize={20} maxSize={40} className="overflow-hidden border-r bg-background hidden lg:flex">
              <DiscoverMusicPanel />
            </ResizablePanel>

            {/* Handle ini hanya muncul di lg ke atas */}
            <ResizableHandle withHandle className="hidden lg:flex" />

            {/* Kolom 3: Now Playing - Terlihat di semua ukuran, flex-1 di sm/md, defaultSize di lg */}
            <ResizablePanel defaultSize={45} minSize={30} maxSize={70} className="bg-background flex-1">
              <NowPlayingPanel />
            </ResizablePanel>

            {/* Handle ini hanya muncul di lg ke atas */}
            <ResizableHandle withHandle className="hidden lg:flex" />

            {/* Kolom 4: Track List - Disembunyikan di sm/md, muncul di lg */}
            <ResizablePanel defaultSize={30} minSize={20} maxSize={40} className="overflow-hidden border-l bg-background hidden lg:flex">
              <TrackListPanel />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
}