 export class FormValidator {
  constructor(config, form) {
    // this._form = form;
    this._config = config;
    this._formElement = form;
    this._inputElement = inputElement;
    this._errorMessage = errorMessage;
    this._errorElement = errorElement;
    this._inputList = inputList;
    this._buttonElement = buttonElement;
  }

  _showErrors () {
    this._errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.add(this._config.inputErrorClass);
    this._errorElement.textContent = this._errorMessage;
    this._errorElement.classList.add(this._config.inputErrorActiveClass);
  };

  _hideErrors () {
    this._errorElement = this._formElement.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.remove(this._config.inputErrorClass);
    this._errorElement.classList.remove(this._config.inputErrorActiveClass);
    this._errorElement.textContent = '';
  };

  _checkValidity () {
    if (!this._inputElement.validity.valid) {
      this._showErrors(this._formElement, this._inputElement, this._inputElement.validationMessage, this._config);
    } else {
      this._hideErrors(this._formElement, this._inputElement, this._config);
    }
  };

  _setEventListeners () {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButton(this._inputList, this._buttonElement,this._config);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        this._checkValidity(this._formElement, this._inputElement, this._config);
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
      this._turnButtonOff(buttonElement,config);
    } else {
      this._turnButtonOn(buttonElement,config);
    };
  }

  _turnButtonOn (item, config) {
    item.classList.remove(this._config.inactiveButtonClass);
    item.removeAttribute('disabled', 'true');
  }

  _turnButtonOff (item, config) {
    item.classList.add(this._config.inactiveButtonClass);
    item.setAttribute('disabled','false');
  }

  enableValidation () {
    this._formList = Array.from(document.querySelectorAll(this._config.formSelector));
    this._formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._fieldsetList = Array.from(formElement.querySelectorAll(this._config.fieldsetSelector));
      this._fieldsetList.forEach((fieldset) => {
        this._setEventListeners(fieldset,this._config);
      });
    });
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

// const showErrors = (formElement,inputElement, errorMessage, config) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(config.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(config.inputErrorActiveClass);
// };

// const hideErrors = (formElement, inputElement, config) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(config.inputErrorClass);
//   errorElement.classList.remove(config.inputErrorActiveClass);
//   errorElement.textContent = '';
// };

// const checkValidity = (formElement, inputElement, config) => {
//   if (!inputElement.validity.valid) {
//     showErrors(formElement, inputElement, inputElement.validationMessage, config);
//   } else {
//     hideErrors(formElement, inputElement, config);
//   }
// };

// const setEventListeners = (formElement, config) => {
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const buttonElement = formElement.querySelector(config.submitButtonSelector);
//   toggleButton(inputList, buttonElement,config);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkValidity(formElement, inputElement, config);
//        toggleButton(inputList, buttonElement,config);
//     });
//   });
// };

// const hasInvalidInput=(inputList) =>{
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// }

// const toggleButton=(inputList, buttonElement, config) => {
//   if (hasInvalidInput(inputList)) {
//     turnButtonOff(buttonElement,config);
//   } else {
//     turnButtonOn(buttonElement,config);
//   };
// }

// const turnButtonOn = (item, config) => {
//   item.classList.remove(config.inactiveButtonClass);
//   item.removeAttribute('disabled', 'true');
// }

// const turnButtonOff = (item, config) => {
//   item.classList.add(config.inactiveButtonClass);
//   item.setAttribute('disabled','false');
// }

// const handleValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     const fieldsetList = Array.from(formElement.querySelectorAll(config.fieldsetSelector));
//     fieldsetList.forEach((fieldset) => {
//       setEventListeners(fieldset,config);
//     });
//   });
// };






// handleValidation(validationOptions);
