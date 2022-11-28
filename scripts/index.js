import { Card } from "./card.js";
import { initialCards } from "./cards.js";
// import {FormValidator, validationOptions } from "./validation.js"

const profilePopup = document.querySelector('.profile-popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = profilePopup.querySelector('.popup__close');
const profilePopupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_data_name');
const workInput = document.querySelector('.popup__input_data_work');
const profileTitle = document.querySelector('.profile__title');
const profileCaption = document.querySelector('.profile__caption');
const placesList = document.querySelector('.elements__items');
const placesTemplate = document.querySelector('.element-template').content;
const popupNewPlace = document.querySelector('.popup-new-place');
const cardsButton = document.querySelector('.profile__add-button');
const placeCloseButton = document.querySelector('.popup-new-place__close');
const placeInput = document.querySelector('.popup-new-place__input_data_place');
const linkInput = document.querySelector('.popup-new-place__input_data_link');
const newPlaceForm = document.querySelector('.popup-new-place__form');
const imgCloseButton = document.querySelector('.popup-full-img__close');
const popupFullImg = document.querySelector('.popup-full-img');
const fullImg = document.querySelector('.popup-full-img__img');
const fullImgCapt = document.querySelector('.popup-full-img__caption');
const popups = document.querySelectorAll('.popup');
const buttonSavePlace = document.querySelector('.popup-new-place__button');
const main = document.querySelector('.root');

const openPopup = function(popup) {
  popup.classList.add('popup_opened');
  main.addEventListener('keydown', closeByEscape);
}

const closePopup = function(popup) {
  popup.classList.remove('popup_opened');
  main.removeEventListener('keydown', closeByEscape);
}

function addCard(item) {

  const card = new Card(item.name, item.link, '.element-template_type_default');
  const cardElement = card.generateCard();

  return cardElement;

  // const placeItem = placesTemplate.cloneNode(true);
  // const likeButton = placeItem.querySelector('.element__like');
  // const deleteButton = placeItem.querySelector('.element__delete-button');

  // const placePic = placeItem.querySelector('.element__img');
  // placePic.src = link;
  // placePic.alt = name;
  // const placeTitle = placeItem.querySelector('.element__title');
  // placeTitle.textContent = name;

  // const openImg = function () {
  //   fullImg.src = link;
  //   fullImgCapt.textContent = name;
  //   fullImg.alt = name;

  //   openPopup(popupFullImg);
  // }

  // placePic.addEventListener('click', openImg);

  // deleteButton.addEventListener('click', function () {
  //   deleteButton.closest('.element').remove();
  // });

  // likeButton.addEventListener('click', function(e) {
  //   e.target.classList.toggle('element__like_active');
  // });
  // return placeItem;
}

// initialCards.forEach((item) => {
//   placesList.append(addCard(item.name, item.link));
// });

initialCards.forEach((item) => {
  // const card = new Card(item.name, item.link, '.element-template_type_default');
  // const cardElement = card.generateCard();

  placesList.append(addCard(item));
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileCaption.textContent = workInput.value;
  closePopup(profilePopup);
}

const editProfile = function() {
  nameInput.value = profileTitle.textContent;
  workInput.value = profileCaption.textContent;
  openPopup(profilePopup);
}

const addPlace = function() {
  openPopup(popupNewPlace);
}

const closeAddPlace = function () {
  closePopup(popupNewPlace);
}

const saveCard = function(evt) {
  evt.preventDefault();
  placesList.prepend(addCard(placeInput.value, linkInput.value));
  placeInput.value = "";
  linkInput.value = "";
  closeAddPlace();
  turnButtonOff(buttonSavePlace, validationOptions.inactiveButtonClass);
}

const closeProfilePopup = function() {
  closePopup(profilePopup);
}

function closeByEscape (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

popups.forEach(function(item) {
  item.addEventListener("click",function(evt) {
    if (evt.target.classList.contains("popup")) {
      closePopup(item);
    }
  });
});

profilePopupForm.addEventListener('submit',handleFormSubmit);
profileEditButton.addEventListener('click', editProfile);
profileCloseButton.addEventListener('click', closeProfilePopup);
cardsButton.addEventListener('click', addPlace);
placeCloseButton.addEventListener('click', closeAddPlace);
newPlaceForm.addEventListener('submit', saveCard);








