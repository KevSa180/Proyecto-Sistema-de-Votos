import { useState } from "react";
import "./App.css";

// Lista de candidatos (puedes personalizar)
const candidatos = [
  { id: 1, nombre: "Candidato 1", partido: "Partido Azul" },
  { id: 2, nombre: "Candidato 2", partido: "Partido Verde" },
  { id: 3, nombre: "Candidato 3", partido: "Partido Rojo" },
  { id: 4, nombre: "Candidato 4", partido: "Partido Amarillo" },
  { id: 5, nombre: "Candidato 5", partido: "Partido Celeste" },
  { id: 6, nombre: "Candidato 6", partido: "Partido Gris" },
];

function App() {
  const [seleccionado, setSeleccionado] = useState<number | null>(null);

  const manejarSeleccion = (id: number) => {
    setSeleccionado(id); // cambia el seleccionado (solo uno a la vez)
  };

  const enviarVoto = () => {
    if (seleccionado) {
      alert(`✅ Voto enviado por: ${candidatos.find(c => c.id === seleccionado)?.nombre}`);
    } else {
      alert("⚠️ Debes seleccionar un candidato antes de enviar.");
    }
  };

  return (
    <div className="contenedor">
      <h1>🗳️ Elecciones 2025</h1>
      <div className="grid-candidatos">
        {candidatos.map((candidato) => (
          <div
            key={candidato.id}
            className={`candidato ${seleccionado === candidato.id ? "seleccionado" : ""}`}
            onClick={() => manejarSeleccion(candidato.id)}
          >
            <div className="info">
              <h3>{candidato.nombre}</h3>
              <p>{candidato.partido}</p>
            </div>
            <div className="casilla">
              {seleccionado === candidato.id ? "X" : ""}
            </div>
          </div>
        ))}
      </div>
      <button className="btn-enviar" onClick={enviarVoto}>
        Enviar voto
      </button>
    </div>
  );
}

export default App;
