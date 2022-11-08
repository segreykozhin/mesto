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
const addButton = document.querySelector('.profile__add-button');
const placeCloseButton = document.querySelector('.popup-new-place__close');
const placeInput = document.querySelector('.popup-new-place__input_data_place');
const linkInput = document.querySelector('.popup-new-place__input_data_link');
const newPlaceForm = document.querySelector('.popup-new-place__form');
const imgCloseButton = document.querySelector('.popup-full-img__close');
const popupFullImg = document.querySelector('.popup-full-img');
const fullImg = document.querySelector('.popup-full-img__img');
const fullImgCapt = document.querySelector('.popup-full-img__caption');
const popups = document.querySelectorAll('.popup');

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
  placePic.alt = name;
  const placeTitle = placeItem.querySelector('.element__title');
  placeTitle.textContent = name;

  const openImg = function () {
    fullImg.src = link;
    fullImgCapt.textContent = name;
    fullImg.alt = name;

    openPopup(popupFullImg);
  }

  placePic.addEventListener('click', openImg);

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
}

const closeFullImg = function() {
  closePopup(popupFullImg);
}

const closeProfilePopup = function() {
  closePopup(profilePopup);
}

popups.forEach(function(item) {
  const main = document.querySelector('.root');
  main.addEventListener('keydown', function(evt) {
    if(evt.key ==='Escape') {
      closePopup(item)
    }
  });

  item.addEventListener("click",function(evt) {
    if (evt.target.classList.contains("popup")) {
      closePopup(item)
    }
  });
});

profilePopupForm.addEventListener('submit',handleFormSubmit);
profileEditButton.addEventListener('click', editProfile);
profileCloseButton.addEventListener('click', closeProfilePopup);
addButton.addEventListener('click', addPlace);
placeCloseButton.addEventListener('click', closeAddPlace);
newPlaceForm.addEventListener('submit', saveCard);
imgCloseButton.addEventListener('click', closeFullImg);








