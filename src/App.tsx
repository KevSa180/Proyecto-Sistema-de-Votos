import { useState } from "react";
import "./App.css";

// Lista de candidatos con imagen (puedes cambiar las URLs por fotos reales)
const candidatos = [
  {
    id: 1,
    nombre: "Candidato 1",
    partido: "Partido Azul",
    foto: "https://via.placeholder.com/120x120.png?text=C1",
  },
  {
    id: 2,
    nombre: "Candidato 2",
    partido: "Partido Verde",
    foto: "https://via.placeholder.com/120x120.png?text=C2",
  },
  {
    id: 3,
    nombre: "Candidato 3",
    partido: "Partido Rojo",
    foto: "https://via.placeholder.com/120x120.png?text=C3",
  },
  {
    id: 4,
    nombre: "Candidato 4",
    partido: "Partido Amarillo",
    foto: "https://via.placeholder.com/120x120.png?text=C4",
  },
];

function App() {
  const [seleccionado, setSeleccionado] = useState<number | null>(null);

  const manejarSeleccion = (id: number) => {
    setSeleccionado(id);
  };

  return (
    <div className="contenedor">
      <h1>🗳️ Elecciones 2025</h1>
      <div className="fila-candidatos">
        {candidatos.map((candidato) => (
          <div key={candidato.id} className="candidato">
            <img src={candidato.foto} alt={candidato.nombre} className="foto" />
            <div className="info">
              <h3>{candidato.nombre}</h3>
              <p>{candidato.partido}</p>
            </div>
            <div
              className="casilla"
              onClick={() => manejarSeleccion(candidato.id)}
            >
              {seleccionado === candidato.id ? "X" : ""}
            </div>
          </div>
        ))}
      </div>

      <button
        className="btn-enviar"
        onClick={() =>
          seleccionado
            ? alert(
                `✅ Voto enviado: ${
                  candidatos.find((c) => c.id === seleccionado)?.nombre
                }`
              )
            : alert("⚠️ Debes seleccionar un candidato antes de enviar")
        }
      >
        Enviar voto
      </button>
    </div>
  );
}

export default App;
