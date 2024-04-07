import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import style from "./../css/buscar.module.css";

export const Buscar = () => {
  const navigate = useNavigate(); // Llama a useNavigate para obtener la función navigate
  const [searchResults, setSearchResults] = useState([]);
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const fakeResults = ['Cancha 1', 'Cancha 2', 'Cancha 3'];
    setSearchResults(fakeResults);
    navigate('/reserve');
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