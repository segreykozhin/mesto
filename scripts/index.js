const popup = document.querySelector(".popup");
const openButton = document.querySelector(".profile__edit-button-open-popup");
const closeButton = popup.querySelector(".popup__close");

const togglePopup = function() {
  popup.classList.toggle("popup_opened");
}

openButton.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);


const saveButton = document.querySelector(".popup__button");
let popupForm = document.querySelector(".popup__form");

function formSubmitHandler(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector(".popup__input-name").value;
  const workInput = document.querySelector(".popup__input-work").value;

  let profileTitle = document.querySelector(".profile__title");
  let profileCaption = document.querySelector(".profile__caption");

  profileTitle.textContent = nameInput;
  profileCaption.textContent = workInput;
}
popupForm.addEventListener("submit",formSubmitHandler);


