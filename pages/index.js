import {Card} from "../components/card.js";
import {
  initialCards,
  validationOptions,
  profPopup,
  profileEditButton,
  profileCloseButton,
  profilePopupForm,
  nameInput,
  workInput,
  profileTitle,
  profileCaption,
  placesList,
  popupNewPlace,
  cardsButton,
  placeCloseButton,
  placeInput,
  linkInput,
  popups,
  buttonSavePlace,
  main,
  popupFullImg,
  fullImg,
  fullImgCaption,
  newPlaceForm
} from "../utils/constants.js";
import {FormValidator} from "../components/validation.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import Section from "../components/section.js";
import UserInfo from "../components/userInfo.js";



const cardList = new Section ({
  items:initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
},'.elements__items');
cardList.renderItems()

const addCardFormSubmit = () => {
  cardList.addItem(createCard({name:placeInput.value}));
  placeInput.value = "";
  linkInput.value = "";
  formPopup.close();
  valCardForm.turnButtonOff(buttonSavePlace);
};

const userInfo = new UserInfo ({nameSelector:'.profile__title', infoSelector: '.profile__caption'});
const PopupImage = new PopupWithImage ('.popup-full-img');
const formPopup = new PopupWithForm ('.popup-new-place',addCardFormSubmit);
formPopup.setEventListeners();
const profilePopup = new PopupWithForm('.profile-popup', editProfileFormSubmit);
profilePopup.setEventListeners();

function editProfileFormSubmit () {
  userInfo.setUserInfo({name: nameInput.value,info: workInput.value});
  profilePopup.close();

};

function createCard(item) {

  const card = new Card(item.name, item.link, '.element-template_type_default', (link,name) => {
    PopupImage.open(link,name);
  });

  return card.generateCard();
}

const valProfileForm = new FormValidator(validationOptions, profilePopupForm);
valProfileForm.enableValidation();
const valCardForm = new FormValidator(validationOptions, newPlaceForm);
valCardForm.enableValidation();

function closeByEscape (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  main.removeEventListener('keydown', closeByEscape);
}

popups.forEach(function(item) {
  item.addEventListener("click",function(evt) {
    if (evt.target.classList.contains("popup")) {
      closePopup(item);
    }
  });
});

profileEditButton.addEventListener('click', () => {
  profilePopup.open();
 const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.name;
  workInput.value = profileInfo.info;
});

cardsButton.addEventListener('click', () => {
  formPopup.open();
});









