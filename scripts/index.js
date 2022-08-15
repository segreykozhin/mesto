const popup = document.querySelector('.popup');
const openButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');
const saveButton = document.querySelector('.popup__button');
let popupForm = document.querySelector('.popup__form');
const togglePopup = function() {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector('.popup__input-name').value;
  const workInput = document.querySelector('.popup__input-work').value;

  let profileTitle = document.querySelector('.profile__title');
  let profileCaption = document.querySelector('.profile__caption');

  profileTitle.textContent = nameInput;
  profileCaption.textContent = workInput;
}
popupForm.addEventListener('submit',formSubmitHandler);
openButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);


