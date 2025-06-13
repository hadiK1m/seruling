"use client"; // Diperlukan karena ada Input dan Button interaktif

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import * as React from "react"; // Tambahkan import React

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-4 md:px-6">
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

                <div className="flex-1 flex justify-center px-4">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search or enter music name"
                            className="pl-9 pr-3 py-2 text-sm"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}