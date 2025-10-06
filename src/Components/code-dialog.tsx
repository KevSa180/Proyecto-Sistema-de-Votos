"use client"

import { useState, useEffect, useRef } from "react"

interface CodeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onValidate: (code: string) => void
  email?: string
  expectedCode?: string
  error?: string | null
}

export function CodeDialog({ open, onOpenChange, onValidate, email, expectedCode = "123456", error }: CodeDialogProps) {
  const [code, setCode] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setCode("")
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
      <div className="relative bg-card text-card-foreground rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-1">Ingresa el código de confirmación</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Hemos enviado un código de 6 dígitos a <span className="font-medium">{email ?? "tu correo"}</span>.
          <br />
          <span className="text-xs">
            * Para el prototipo, el código es <span className="font-mono font-semibold">{expectedCode}</span>.
          </span>
        </p>

        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          maxLength={6}
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
          className="w-full border rounded-md px-3 py-2 mb-2 outline-none focus:ring-2 focus:ring-primary"
          placeholder="••••••"
        />
        {error ? <p className="text-sm text-red-600 mb-2">{error}</p> : null}

        <div className="flex justify-end space-x-2 mt-2">
          <button
            onClick={() => onOpenChange(false)}
            className="px-4 py-2 rounded-md border hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={() => onValidate(code)}
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Confirmar código
          </button>
        </div>
      </div>
    </div>
  )
}
