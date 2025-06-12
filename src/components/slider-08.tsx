"use client";

import { Slider } from "@/components/ui/slider";
import * as React from "react";

// Helper function untuk memformat durasi menjadi MM:SS
const formatDuration = (durationInSeconds: number) => {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default function AudioSliderDemo() {
  const duration = 200; // Contoh durasi total dalam detik (misal: 3 menit 20 detik)
  const [playbackTime, setPlaybackTime] = React.useState([78]); // Contoh waktu putar saat ini

  // Pastikan nilai playbackTime tidak melebihi duration
  React.useEffect(() => {
    if (playbackTime[0] > duration) {
      setPlaybackTime([duration]);
    }
  }, [playbackTime, duration]);

  return (
    <div className="max-w-sm w-full">
      <Slider
        defaultValue={playbackTime}
        max={duration}
        step={1}
        onValueChange={setPlaybackTime}
        // Styling untuk progress bar: thumb putih, track hijau/abu-abu
        className="w-full [&>span:first-child]:h-2 [&>span:first-child]:bg-green-200 [&_span]:h-14[&_span]:rounded-full [&_[role=slider]]:h-3 [&_[role=slider]]:w-3 [&_[role=slider]]:rounded-full [&_[role=slider]]:bg-white [&_[role=slider]]:border [&_[role=slider]]:border-white [&_[role=slider]]:focus-visible:ring-offset-background [&_span:first-child>span]:bg-green-500"
      />
      <div className="mt-1 flex justify-between text-xs font-medium text-muted-foreground">
        <span>{formatDuration(playbackTime[0])}</span>
        <span>{formatDuration(duration)}</span>
      </div>
    </div>
  );
}