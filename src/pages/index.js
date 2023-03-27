import './index.css'
import {Card} from "../components/card.js";
import {
  initialCards,
  validationOptions,
  profileEditButton,
  profilePopupForm,
  nameInput,
  workInput,
  cardsButton,
  placeInput,
  linkInput,
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

function addCardFormSubmit (inputs) {
  cardList.addItem(createCard(inputs));
  addCardPopup.close();
};

const userInfo = new UserInfo ({nameSelector:'.profile__title', infoSelector: '.profile__caption'});
const popupImage = new PopupWithImage ('.popup-full-img');
popupImage.setEventListeners();
const addCardPopup = new PopupWithForm ('.popup-new-place',addCardFormSubmit);
addCardPopup.setEventListeners();
const profilePopup = new PopupWithForm('.profile-popup', editProfileFormSubmit);
profilePopup.setEventListeners();
function editProfileFormSubmit () {
  userInfo.setUserInfo({name: nameInput.value,info: workInput.value});
  profilePopup.close();
};

function createCard(item) {

  const card = new Card(item.name, item.link, '.element-template_type_default', (link,name) => {
    popupImage.open(link,name);
  });

  return card.generateCard();
}

const valProfileForm = new FormValidator(validationOptions, profilePopupForm);
valProfileForm.enableValidation();
const valCardForm = new FormValidator(validationOptions, newPlaceForm);
valCardForm.enableValidation();

profileEditButton.addEventListener('click', () => {
  profilePopup.open();
 const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.name;
  workInput.value = profileInfo.info;
});

cardsButton.addEventListener('click', () => {
  addCardPopup.open();
  valCardForm.turnButtonOff();
});
