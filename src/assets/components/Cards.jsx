// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../styles/Cards.scss'; // Asegúrate de que la ruta al archivo CSS sea correcta
import { FaRocket } from 'react-icons/fa'; // Asegúrate de instalar react-icons si no lo has hecho

const Cards = () => {
  const cardData = [
    { id: 1, title: 'Item 1', text: 'Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.' },
    { id: 2, title: 'Item 2', text: 'Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.' },
    { id: 3, title: 'Item 3', text: 'Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.' },
  ];

  return (
    <div className="cards-container">
      {cardData.map(card => (
        <div key={card.id} className="card">
          <FaRocket className="card-icon" />
          <h1 className="card-title">{card.title}</h1>
          <p className="card-text">{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
