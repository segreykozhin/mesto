import { Card } from "./card.js";
import { initialCards,validationOptions} from "./constants.js";
import {FormValidator} from "./validation.js"

const profilePopup = document.querySelector('.profile-popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = profilePopup.querySelector('.popup__close');
const profilePopupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_data_name');
const workInput = document.querySelector('.popup__input_data_work');
const profileTitle = document.querySelector('.profile__title');
const profileCaption = document.querySelector('.profile__caption');
const placesList = document.querySelector('.elements__items');
const popupNewPlace = document.querySelector('.popup-new-place');
const cardsButton = document.querySelector('.profile__add-button');
const placeCloseButton = document.querySelector('.popup-new-place__close');
const placeInput = document.querySelector('.popup-new-place__input_data_place');
const linkInput = document.querySelector('.popup-new-place__input_data_link');
const newPlaceForm = document.querySelector('.popup-new-place__form');
const popups = document.querySelectorAll('.popup');
const buttonSavePlace = document.querySelector('.popup-new-place__button');
const main = document.querySelector('.root');
const popupFullImg = document.body.querySelector('.popup-full-img');
const fullImg = document.body.querySelector('.popup-full-img__img');
const fullImgCaption = document.body.querySelector('.popup-full-img__caption');

const openPopup = function(popup) {
  popup.classList.add('popup_opened');
  main.addEventListener('keydown', closeByEscape);
}

const handleOpenPhoto = function (link, name) {
  fullImg.src = link;
  fullImgCaption.textContent = name;
  fullImg.alt = name;
  openPopup(popupFullImg);
}

const closePopup = function(popup) {
  popup.classList.remove('popup_opened');
  main.removeEventListener('keydown', closeByEscape);
}

function createCard(item) {

  const card = new Card(item.name, item.link, '.element-template_type_default', handleOpenPhoto);

  return card.generateCard();
}

const valProfileForm = new FormValidator(validationOptions, profilePopupForm);
valProfileForm.enableValidation();
const valCardForm = new FormValidator(validationOptions, newPlaceForm);
valCardForm.enableValidation();

initialCards.forEach((item) => {
  placesList.append(createCard(item));
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileCaption.textContent = workInput.value;
  closePopup(profilePopup);
}

const openEditingProfile = function() {
  nameInput.value = profileTitle.textContent;
  workInput.value = profileCaption.textContent;
  openPopup(profilePopup);
}

const openaddPlace = function() {
  openPopup(popupNewPlace);
}

const closeAddPlace = function () {
  closePopup(popupNewPlace);
}

const saveCard = function(evt) {
  evt.preventDefault();
  placesList.prepend(createCard({name:placeInput.value, link:linkInput.value}));
  placeInput.value = "";
  linkInput.value = "";
  closeAddPlace();
  valCardForm.turnButtonOff(buttonSavePlace)
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

profilePopupForm.addEventListener('submit',handleProfileFormSubmit);
profileEditButton.addEventListener('click', openEditingProfile);
profileCloseButton.addEventListener('click', closeProfilePopup);
cardsButton.addEventListener('click', openaddPlace);
placeCloseButton.addEventListener('click', closeAddPlace);
newPlaceForm.addEventListener('submit', saveCard);









