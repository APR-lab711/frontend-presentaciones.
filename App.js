import React, { useState } from "react";

function App() {
  const [tema, setTema] = useState("");
  const [mensaje, setMensaje] = useState("");

  const generarPresentacion = async () => {
    const response = await fetch(`https://TUDOMINIO.render.com/generar_presentacion/?tema=${tema}`);
    const data = await response.json();
    setMensaje(data.mensaje);
  };

  return (
    <div>
      <h1>Generador de Presentaciones con IA</h1>
      <input type="text" placeholder="Escribe un tema" value={tema} onChange={(e) => setTema(e.target.value)} />
      <button onClick={generarPresentacion}>Generar</button>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
