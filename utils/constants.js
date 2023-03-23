export const validationOptions = {
  formSelector: '.form',
  fieldsetSelector: '.form__fieldset',
  inactiveButtonClass:'form__button_off',
  inputSelector:'.form__input',
  submitButtonSelector: '.form__button',
  inputErrorClass: 'form__input_type_error',
  inputErrorActiveClass: 'form__input-error_active',
}

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const profPopup = document.querySelector('.profile-popup');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileCloseButton = document.querySelector('.popup__close');
export const profilePopupForm = document.querySelector('.popup__form');
export const nameInput = document.querySelector('.popup__input_data_name');
export const workInput = document.querySelector('.popup__input_data_work');
export const profileTitle = document.querySelector('.profile__title');
export const profileCaption = document.querySelector('.profile__caption');
export const placesList = document.querySelector('.elements__items');
export const popupNewPlace = document.querySelector('.popup-new-place');
export const cardsButton = document.querySelector('.profile__add-button');
export const placeCloseButton = document.querySelector('.popup-new-place__close');
export const placeInput = document.querySelector('.popup-new-place__input_data_place');
export const linkInput = document.querySelector('.popup-new-place__input_data_link');
export const newPlaceForm = document.querySelector('.popup-new-place__form');
export const popups = document.querySelectorAll('.popup');
export const buttonSavePlace = document.querySelector('.popup-new-place__button');
export const main = document.querySelector('.root');
export const popupFullImg = document.body.querySelector('.popup-full-img');
export const fullImg = document.body.querySelector('.popup-full-img__img');
export const fullImgCaption = document.body.querySelector('.popup-full-img__caption');
