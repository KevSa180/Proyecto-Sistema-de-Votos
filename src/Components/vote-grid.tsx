"use client"

import { CandidateCard } from "./candidate-card"

interface Candidate {
  id: number
  name: string
  party: string
  photo: string
}

interface VoteGridProps {
  candidates: Candidate[]
  selectedCandidate: number | null
  onSelectCandidate: (id: number) => void
}

export function VoteGrid({ candidates, selectedCandidate, onSelectCandidate }: VoteGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          id={candidate.id}
          name={candidate.name}
          party={candidate.party}
          photo={candidate.photo}
          isSelected={selectedCandidate === candidate.id}
          onSelect={onSelectCandidate}
        />
      ))}
    </div>
  )
}
