import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <article className="element">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="element__photo"
        onClick={handleClick}
      />
      <button
        type="button"
        aria-label="Удалить"
        className="element__delete-button"
      ></button>
      <div className="element__subline">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__block-like">
          <button
            type="button"
            aria-label="Нравится"
            className="element__button-like"
          ></button>
          <p className="element__quantity-likes">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}
export default Card;
