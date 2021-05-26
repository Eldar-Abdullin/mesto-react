import React from 'react'

function ImagePopup({card, onClose}) {
    console.log(card)
    return (
        <div className={`popup popup_img ${card && 'popup_opened'}`}>
        <article className="popup__img-article">
          <button
            type="reset"
            className="popup__close-button popup__close-button_img"
            onClick={onClose}
          ></button>
          <img className="popup__image" src={card ? card.link : '#'} alt={card ? card.name : '#'} />
          <p className="popup__img-caption">{card ? card.name : ''} </p>
        </article>
        </div>
    )
}
export default ImagePopup