import './index.css'
import {Card} from "../components/card.js";
import {
  validationOptions,
  profileEditButton,
  profilePopupForm,
  nameInput,
  workInput,
  avatarInput,
  avatarEditButton,
  cardsButton,
  newPlaceForm,
} from "../utils/constants.js";
import {FormValidator} from "../components/validation.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import Section from "../components/section.js";
import UserInfo from "../components/userInfo.js";
import Api from '../components/api.js';
import ConfirmPopup from '../components/confirmPopup.js';

let userId = null;

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: '553891ce-22c5-466d-8e8e-9ab63282da48',
    'Content-Type': 'application/json'
  }});

const cardList = new Section ({
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
},'.elements__items');

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, сards]) => {
    userId = user._id;
    userInfo.setUserInfo(user);
    cardList.renderItems(сards);
  })
  .catch(err => console.log(err));

const userInfo = new UserInfo ({nameSelector:'.profile__title', infoSelector: '.profile__caption', avatarSelector: '.profile__image'});
const popupImage = new PopupWithImage ('.popup-full-img');
popupImage.setEventListeners();
const addCardPopup = new PopupWithForm ('.popup-new-place',addCardFormSubmit);
addCardPopup.setEventListeners();
const profilePopup = new PopupWithForm('.profile-popup', editProfileFormSubmit);
profilePopup.setEventListeners();
const avatarPopup = new PopupWithForm('.update-avatar-popup', updateAvatarSubmit);
avatarPopup.setEventListeners();
const confirmPopup = new ConfirmPopup ('.confirm-popup');
confirmPopup.setEventListeners ();

function editProfileFormSubmit () {
  api
    .saveUserInfo({name: nameInput.value,about: workInput.value})
    .then((res) => {
      userInfo.setUserInfo(res)
    })
    .catch(err => console.log(err));
    profilePopup.close();
};

function updateAvatarSubmit() {
  api
    .saveUserAvatar({avatar:avatarInput.value})
    .then(res => {
      userInfo.setUserInfo(res)
    })
    .catch(err => console.log(err));
    avatarPopup.close();
}

function addCardFormSubmit (data) {
  api
    .addNewCard(data)
    .then((res) => {
      cardList.addItem(createCard(res));
    })
    .catch(err => console.log(err));
    addCardPopup.close();
};

function createCard(item) {
  const card = new Card(item, userId,'.element-template_type_default', {
    handleOpenPhoto: (link,name) => {
      popupImage.open(link,name);
    },
    handleLikeCard:(data) => {
      api
        .like(data)
        .then(res => {card.handleLike(res)})
        .catch((err) => console.log(err));
    },
    handleDislikeCard: (data) => {
      api
        .dislike(data)
        .then(res => {card.handleDislike(res)})
        .catch((err) => console.log(err));
    },
    handleDeleteCard: (data) => {
      confirmPopup.open();
      confirmPopup.submitAction(() => {
        api
        .deleteCard(data)
        .then(() => {
          card.deleteElement();
          confirmPopup.close()
        })
        .catch((err) => console.log(err));
      })
    }
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
  workInput.value = profileInfo.about;
});

avatarEditButton.addEventListener('click', () => {
  avatarPopup.open();
})

cardsButton.addEventListener('click', () => {
  addCardPopup.open();
  valCardForm.turnButtonOff();
});
