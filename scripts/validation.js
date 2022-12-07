 export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    // this._inputElement = this._formElement.querySelector(this._config.inputSelector);
    // this._errorMessage = errorMessage;
    // this._inputElement = inputElement;
    this._errorElement = this._formElement.querySelector(this._config.inputErrorClass);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  _showErrors () {
    this._errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.add(this._config.inputErrorClass);
    this._errorElement.textContent = this._inputElement.validationMessage;
    this._errorElement.classList.add(this._config.inputErrorActiveClass);
  };

  _hideErrors () {
    this._errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.remove(this._config.inputErrorClass);
    this._errorElement.classList.remove(this._config.inputErrorActiveClass);
    this._errorElement.textContent = '';
  };

  _checkValidity = () => {
    if (!this._inputElement.validity.valid) {
      this._showErrors(this._formElement, this._inputElement, this._config);
    } else {
      this._hideErrors(this._formElement, this._inputElement, this._config);
    }
  };

  _setEventListeners  () {
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButton(this._inputList, this._buttonElement,this._config);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        this._inputElement = evt.target;
        this._checkValidity(this._formElement, inputElement, this._config);
        this._toggleButton(this._inputList, this._buttonElement,this._config);
      });
    });
  };

  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButton () {
    if (this._hasInvalidInput(this._inputList)) {
      this._turnButtonOff(this._buttonElement,this._config);
    } else {
      this._turnButtonOn(this._buttonElement,this._config);
    };
  }

  _turnButtonOn (item) {
    item.classList.remove(this._config.inactiveButtonClass);
    item.removeAttribute('disabled', 'true');
  }

  _turnButtonOff (item) {
    item.classList.add(this._config.inactiveButtonClass);
    item.setAttribute('disabled','false');
  }

  enableValidation () {
    this._setEventListeners();
  };
}

export const validationOptions = {
  formSelector: '.form',
  fieldsetSelector: '.form__fieldset',
  inactiveButtonClass:'form__button_off',
  inputSelector:'.form__input',
  submitButtonSelector: '.form__button',
  inputErrorClass: 'form__input_type_error',
  inputErrorActiveClass: 'form__input-error_active',
}
