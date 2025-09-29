"use client"

interface ConfirmationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
  candidateName: string
}

export function ConfirmationDialog({ open, onOpenChange, onConfirm, candidateName }: ConfirmationDialogProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={() => onOpenChange(false)} />

      {/* Dialog */}
      <div className="relative bg-card border border-border rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-4">Confirmar Voto</h2>
          <p className="text-muted-foreground mb-6">
            ¿Está seguro que desea votar por <strong>{candidateName}</strong>?
          </p>
          <div className="flex space-x-3 justify-center">
            <button
              onClick={() => onOpenChange(false)}
              className="px-4 py-2 rounded-md border border-border text-foreground hover:bg-muted transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Confirmar Voto
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
