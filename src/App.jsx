import React, { useState } from "react";
import Card from "./Card"; 

function App() {
  const [colorInput, setColorInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showCard, setShowCard] = useState(false); 

  const handleColorChange = (event) => {
    setColorInput(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!colorInput || colorInput.length < 3 || colorInput.trim() !== colorInput) {
      setErrorMessage("El color debe tener al menos 3 caracteres y no debe comenzar con espacios en blanco.");
    } else if (textInput.length < 6) {
      setErrorMessage("El texto debe tener al menos 6 caracteres.");
    } else {
      setErrorMessage("");
      setShowCard(true); 
    }
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa un color"
          value={colorInput}
          onChange={handleColorChange}
        />
        <input
          type="text"
          placeholder="Ingresa un texto"
          value={textInput}
          onChange={handleTextChange}
        />
        <button type="submit">Enviar</button>
      </form>

      {errorMessage ? (
        <p className="error-message">{errorMessage}</p>
      ) : (
        showCard && <Card color={colorInput} text={textInput} />
      )}

      {errorMessage && (
        <p className="general-error">Por favor chequea que la información sea correcta.</p>
      )}
    </div>
  );
}

export default App;








