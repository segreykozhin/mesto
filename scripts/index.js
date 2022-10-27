const initialCards = [
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

const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = popup.querySelector('.popup__close');
const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_data_name');
const workInput = document.querySelector('.popup__input_data_work');
const profileTitle = document.querySelector('.profile__title');
const profileCaption = document.querySelector('.profile__caption');
const placesList = document.querySelector('.elements__items');
const placesTemplate = document.querySelector('.element-template').content;
const popupNewPlace = document.querySelector('.popup-new-place');
const addButton = document.querySelector('.profile__add-button');
const placeCloseButton = document.querySelector('.popup-new-place__close');
const placeInput = document.querySelector('.popup-new-place__input_data_place');
const linkInput = document.querySelector('.popup-new-place__input_data_link');
const newPlaceForm = document.querySelector('.popup-new-place__form');
const imgCloseButton = document.querySelector('.popup-full-img__close');
const popupFullImg = document.querySelector('.popup-full-img');

const openPopup = function(popup) {
  popup.classList.add('popup_opened');
}

const closePopup = function(popup) {
  popup.classList.remove('popup_opened');
}

function addCard(name, link) {

  const placeItem = placesTemplate.cloneNode(true);
  const likeButton = placeItem.querySelector('.element__like');
  const deleteButton = placeItem.querySelector('.element__delete-button');


  const placePic = placeItem.querySelector('.element__img');
  placePic.src = link;
  const placeTitle = placeItem.querySelector('.element__title');
  placeTitle.textContent = name;

  const fullImg = document.querySelector('.popup-full-img__img');
  const fullImgCapt = document.querySelector('.popup-full-img__caption');

  const ImgOpen = function () {
    fullImg.src = link;
    fullImgCapt.textContent = name;
    openPopup(popupFullImg);
  }

  placePic.addEventListener('click', ImgOpen);

  deleteButton.addEventListener('click', function () {
    deleteButton.closest('.element').remove();
  });

  likeButton.addEventListener('click', function(e) {
    e.target.classList.toggle('element__like_active');
  });
  return placeItem;
}

initialCards.forEach((item) => {
  placesList.append(addCard(item.name, item.link));
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileCaption.textContent = workInput.value;
  closePopup(popup);
}

const editProfile = function() {
  nameInput.value = profileTitle.textContent;
  workInput.value = profileCaption.textContent;
  openPopup(popup);
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
  closeAddPlace();
}

const closeFullImg = function() {
  closePopup(popupFullImg);
}

popupForm.addEventListener('submit',formSubmitHandler);
profileEditButton.addEventListener('click', editProfile);
profileCloseButton.addEventListener('click', formSubmitHandler);
addButton.addEventListener('click', addPlace);
placeCloseButton.addEventListener('click', closeAddPlace);
newPlaceForm.addEventListener('submit', saveCard);
imgCloseButton.addEventListener('click', closeFullImg);






