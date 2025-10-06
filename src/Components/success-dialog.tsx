"use client"

interface SuccessDialogProps {
  open: boolean
  onClose: () => void
  candidateName: string
}

export function SuccessDialog({ open, onClose, candidateName }: SuccessDialogProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-card text-card-foreground rounded-lg shadow-xl w-full max-w-md p-6 text-center">
        <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold mb-1">¡Voto registrado!</h2>
        <p className="text-muted-foreground mb-4">
          Tu voto a <span className="font-medium">{candidateName}</span> fue realizado con éxito.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
