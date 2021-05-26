import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";

function App() {
  const [selectedCard, setSelectedCard] = React.useState(null);
  console.log(selectedCard);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <body className="background-color">
      <div className="App">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={setSelectedCard}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            name="profile"
            title="Редактировать профиль"
            button="Сохранить"
          >
            <input
              minLength="2"
              maxLength="40"
              type="text"
              placeholder="Имя"
              name="name"
              id="name-input"
              className="popup__input popup__input_type_name"
              required
            />
            <span id="name-input-error" className="popup__error"></span>
            <input
              minLength="2"
              maxLength="200"
              type="text"
              name="job"
              id="job-input"
              placeholder="О себе"
              className="popup__input popup__input_type_job"
              required
            />
            <span id="job-input-error" className="popup__error"></span>
          </PopupWithForm>
          <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            name="add"
            title="Новое место"
            button="Создать"
          >
            <input
              type="text"
              placeholder="Название"
              name="place"
              id="place-input"
              className="popup__input popup__input_place_name"
              required
            />
            <span id="place-input-error" className="popup__error"></span>
            <input
              type="url"
              name="link"
              id="link-input"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_place_link"
              required
            />
            <span id="link-input-error" className="popup__error"></span>
          </PopupWithForm>
          <PopupWithForm
            isOpen={false}
            onClose={closeAllPopups}
            name="delete"
            title="Вы уверены?"
            button="Да"
          ></PopupWithForm>
          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            name="change-avatar"
            title="Обновить аватар"
            button="Сохранить"
          >
            <input
              type="url"
              name="link"
              id="avatar-link-input"
              placeholder="Ссылка на аватар"
              className="popup__input popup__input_change-avatar"
              required
            />
            <span id="avatar-link-input-error" className="popup__error"></span>
          </PopupWithForm>
          <Footer />
        </div>
      </div>
    </body>
  );
}

export default App;
