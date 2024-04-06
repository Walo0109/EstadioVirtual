import React, { useState } from 'react';
import style from "./../css/buscar.module.css";// Asegúrate de tener el archivo de estilos CSS importado correctamente

export const Buscar = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí deberías enviar los parámetros de búsqueda al servidor o API
    // y actualizar los resultados cuando se reciba la respuesta
    // Por ahora, simplemente simularemos resultados falsos
    const fakeResults = ['Cancha 1', 'Cancha 2', 'Cancha 3']; // Simulación de resultados falsos
    setSearchResults(fakeResults);
  };

  return (
    <div className={style.buscarCancha}>
      <form onSubmit={handleSearch} className={style.form}>
        <input type="text" id="city" placeholder='Buscar Ciudad' value={city} onChange={(e) => setCity(e.target.value)} />

        <input type="text" id="type" placeholder='Buscar Cancha' value={type} onChange={(e) => setType(e.target.value)} />
        
        <input type="date" id="day" value={day} onChange={(e) => setDay(e.target.value)} max="9999-12-31" />

        <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />

        <button type="submit">Buscar</button>
      </form>
      <div>
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}