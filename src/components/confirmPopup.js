import Popup from "./popup.js";

export default class ConfirmPopup extends Popup {
  constructor(popupSelector,) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  submitAction(action) {
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}
