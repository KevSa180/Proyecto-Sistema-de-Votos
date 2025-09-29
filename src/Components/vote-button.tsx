"use client"

import { cn } from "../lib/utils"

interface VoteButtonProps {
  disabled: boolean
  onClick: () => void
}

export function VoteButton({ disabled, onClick }: VoteButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200",
          disabled
            ? "bg-muted text-muted-foreground cursor-not-allowed"
            : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
        )}
      >
        <span>Enviar Voto</span>
        {/* Arrow icon */}
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12,5 19,12 12,19" />
        </svg>
      </button>
    </div>
  )
}
