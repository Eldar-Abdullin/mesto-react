import React from "react";
import PopupWithForm from "./PopupWithForm";
function AddPlacePopup(props) {
    const inputNameRef = React.useRef('')
    const inputLinkRef = React.useRef('')
    function handleSubmit(e) {
        e.preventDefault();
      
        props.onAddPlace({
          name: inputNameRef.current.value,
          link: inputLinkRef.current.value
        });
        
      }
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="add"
      title="Новое место"
      button="Создать"
    >
      <input
        type="text"
        placeholder="Название"
        name="place"
        id="place-input"
        ref={inputNameRef}
        className="popup__input popup__input_place_name"
        required
      />
      <span id="place-input-error" className="popup__error"></span>
      <input
        type="url"
        name="link"
        id="link-input"
        ref={inputLinkRef}
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_place_link"
        required
      />
      <span id="link-input-error" className="popup__error"></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup