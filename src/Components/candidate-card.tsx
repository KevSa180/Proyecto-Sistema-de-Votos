
import { cn } from "../lib/utils"

interface CandidateCardProps {
  id: number
  name: string
  party: string
  photo: string
  isSelected: boolean
  onSelect: (id: number) => void
}

export function CandidateCard({ id, name, party, photo, isSelected, onSelect }: CandidateCardProps) {
  return (
    <div
      className={cn(
        "relative cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 hover:shadow-lg",
        isSelected ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card hover:border-primary/50",
      )}
      onClick={() => onSelect(id)}
    >
      <div className="flex flex-col items-center space-y-3">
        <div className="relative">
          <img
            src={photo || "/placeholder.svg"}
            alt={`${name} - ${party}`}
            className="h-24 w-24 rounded-full object-cover"
          />
          {isSelected && (
            <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
              {/* Check icon */}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20,6 9,17 4,12" />
              </svg>
            </div>
          )}
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{party}</p>
        </div>
      </div>
    </div>
  )
}
