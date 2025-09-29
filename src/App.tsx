"use client"

import { useState } from "react"
import { VoteHeader } from "./Components/vote-header"
import { VoteGrid } from "./Components/vote-grid"
import { VoteButton } from "./Components/vote-button"
import { ConfirmationDialog } from "./Components/confirmation-dialog"
import "./App.css"

// Sample candidate data
const candidates = [
  {
    id: 1,
    name: "María González",
    party: "Partido Democrático",
    photo: "/professional-woman-politician-headshot-2.jpg",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    party: "Partido Liberal",
    photo: "/professional-politician-2.png",
  },
  {
    id: 3,
    name: "Ana Martínez",
    party: "Partido Verde",
    photo: "/professional-woman-politician-headshot-green-2.jpg",
  },
  {
    id: 4,
    name: "José López",
    party: "Partido Conservador",
    photo: "/professional-man-politician-headshot-conservative-2.jpg",
  },
  {
    id: 5,
    name: "Laura Fernández",
    party: "Partido Socialista",
    photo: "/professional-woman-politician-headshot-socialist-2.jpg",
  },
  {
    id: 6,
    name: "Miguel Torres",
    party: "Partido Independiente",
    photo: "/professional-man-politician-headshot-independent-2.jpg",
  },
]

export default function App() {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleVoteSubmit = () => {
    if (selectedCandidate) {
      setShowConfirmation(true)
    }
  }

  const handleConfirmVote = () => {
    // Here you would typically send the vote to your backend
    console.log(`Vote submitted for candidate ${selectedCandidate}`)
    setShowConfirmation(false)
    // Reset or redirect as needed
    alert("¡Su voto ha sido registrado exitosamente!")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <VoteHeader />

        <VoteGrid
          candidates={candidates}
          selectedCandidate={selectedCandidate}
          onSelectCandidate={setSelectedCandidate}
        />

        <VoteButton disabled={!selectedCandidate} onClick={handleVoteSubmit} />

        <ConfirmationDialog
          open={showConfirmation}
          onOpenChange={setShowConfirmation}
          onConfirm={handleConfirmVote}
          candidateName={candidates.find((c) => c.id === selectedCandidate)?.name || ""}
        />
      </div>
    </div>
  )
}
