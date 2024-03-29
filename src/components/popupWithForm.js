import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector,handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.form');
    this._inputList = Array.from(this._popupForm.querySelectorAll(".form__input"));
    this._saveButton = this._popup.querySelector('.popup__button');
    this._saveButtonText = this._saveButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  loading(isLoading) {
    if(isLoading) {
      this._saveButton.textContent = 'Сохранение...'
    } else {
      this._saveButton.textContent = this._saveButtonText;
    }
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit',(evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
}
