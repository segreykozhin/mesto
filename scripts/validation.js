 export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._errorElement = this._formElement.querySelector(this._config.inputErrorClass);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  _showError (inputElement) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._config.inputErrorActiveClass);
  };

  _hideError (inputElement) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    this._errorElement.classList.remove(this._config.inputErrorActiveClass);
    this._errorElement.textContent = '';
  };

  _checkValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  };

  _setEventListeners  () {
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButton();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkValidity(inputElement);
        this._toggleButton();
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
      this.turnButtonOff();
    } else {
      this._turnButtonOn();
    };
  }

  _turnButtonOn () {
    this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled', 'true');
  }

  turnButtonOff () {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.setAttribute('disabled','false');
  }

  enableValidation () {
    this._setEventListeners();
  };
}


