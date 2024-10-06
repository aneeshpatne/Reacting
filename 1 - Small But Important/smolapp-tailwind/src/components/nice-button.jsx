'use client'

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function NiceButton() {
  return (
    (<Button
      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2">
      <span>Discover Magic</span>
      <Sparkles className="w-5 h-5" />
    </Button>)
  );
}