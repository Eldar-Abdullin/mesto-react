import React from "react";
import api from "../utils/Api";
import Card from "./Card";
function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserAvatar(data.avatar);
        setUserName(data.name);
        setUserDescription(data.about);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [cards, setCard] = React.useState([]);
  React.useEffect(() => {
    api
      .getAllCards()
      .then((data) => {
        setCard(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main>
      <section className="profile">
        <div className="profile__div-avatar">
          <img src={userAvatar} alt="аватар" className="profile__avatar" />
          <button
            type="button"
            aria-label="Изменить"
            className="profile__change-button"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
