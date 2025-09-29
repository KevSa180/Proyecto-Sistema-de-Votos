export function VoteHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        {/* Ballot box icon */}
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-foreground mb-2">Sistema de Votación Electrónica</h1>
      <p className="text-muted-foreground text-lg">Seleccione su candidato preferido para las elecciones</p>
    </div>
  )
}
