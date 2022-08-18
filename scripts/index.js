const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = popup.querySelector('.popup__close');
const popupSaveButton = document.querySelector('.popup__button');
let popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_data_name');
const workInput = document.querySelector('.popup__input_data_work');
let profileTitle = document.querySelector('.profile__title');
let profileCaption = document.querySelector('.profile__caption');

const openPopup = function() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  workInput.value = profileCaption.textContent;
}

const closePopup = function() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector('.popup__input_data_name').value;
  // если перенести к остальным переменным, то функция не работает
  const workInput = document.querySelector('.popup__input_data_work').value;

  profileTitle.textContent = nameInput;
  profileCaption.textContent = workInput;
  closePopup();
}

popupForm.addEventListener('submit',formSubmitHandler);
profileEditButton.addEventListener('click', openPopup);
profileCloseButton.addEventListener('click', closePopup);


