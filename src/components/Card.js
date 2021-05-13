import React from 'react';

function Card({ card, onCardClick }) {
  const cardStyle = { backgroundImage: `url(${card.link})` };

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="places__item card">
      <div className="card__image" style={cardStyle} onClick={handleClick}>
      </div>
      <button type="button" className="card__delete-button"></button>
      <div className="card__description">
        <h2 className="card__title">
          {card.name}
        </h2>
        <div className="card__likes">
          <button type="button" className="card__like-button"></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
