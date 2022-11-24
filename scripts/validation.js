 class FormValidator {
  constructor(form, validationOptions) {
    this._form = form;
    this._validationOptions = validationOptions;
  }

  _showErrors(formElement,inputElement, errorMessage, inputErrorClass, inputErrorActiveClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(inputErrorActiveClass);
  };

  _hideErrors (formElement,inputElement,inputErrorClass, inputErrorActiveClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(inputErrorActiveClass);
    errorElement.textContent = '';
  };

  _checkValidity (formElement, inputElement) {
    if (!inputElement.validity.valid) {
      showErrors(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideErrors(formElement, inputElement);
    }
  };

  _setEventListeners (formElement,inputSelector,submitButtonSelector,inactiveButtonClass) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButton(inputList, buttonElement,inactiveButtonClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkValidity(formElement, inputElement);
         toggleButton(inputList, buttonElement,inactiveButtonClass);
      });
    });
  };

  _hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButton (inputList,buttonElement,inactiveButtonClass) {
    if (hasInvalidInput(inputList)) {
      turnButtonOff(buttonElement,inactiveButtonClass);
    } else {
      turnButtonOn(buttonElement,inactiveButtonClass);
    };
  }

  _turnButtonOn (item,inactiveButtonClass) {
    item.classList.remove(inactiveButtonClass);
    item.removeAttribute('disabled', 'true');
  }

  _turnButtonOff (item,inactiveButtonClass) {
    item.classList.add(inactiveButtonClass);
    item.setAttribute('disabled','false');
  }

  handleValidation ({formSelector,fieldsetSelector,inactiveButtonClass,inputSelector,submitButtonSelector,inputErrorClass,inputErrorActiveClass}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll(fieldsetSelector));
      fieldsetList.forEach((fieldset) => {
        setEventListeners(fieldset,inputSelector,submitButtonSelector,inactiveButtonClass);
      });
    });
  };
}


// const showErrors = (formElement,inputElement, errorMessage, inputErrorClass, inputErrorActiveClass) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(inputErrorActiveClass);
// };

// const hideErrors = (formElement,inputElement,inputErrorClass, inputErrorActiveClass) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.classList.remove(inputErrorActiveClass);
//   errorElement.textContent = '';
// };

// const checkValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showErrors(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideErrors(formElement, inputElement);
//   }
// };

// const setEventListeners = (formElement,inputSelector,submitButtonSelector,inactiveButtonClass) => {
//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   const buttonElement = formElement.querySelector(submitButtonSelector);
//   toggleButton(inputList, buttonElement,inactiveButtonClass);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkValidity(formElement, inputElement);
//        toggleButton(inputList, buttonElement,inactiveButtonClass);
//     });
//   });
// };

// const hasInvalidInput=(inputList) =>{
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// }

// const toggleButton=(inputList,buttonElement,inactiveButtonClass) => {
//   if (hasInvalidInput(inputList)) {
//     turnButtonOff(buttonElement,inactiveButtonClass);
//   } else {
//     turnButtonOn(buttonElement,inactiveButtonClass);
//   };
// }

// const turnButtonOn = (item,inactiveButtonClass) => {
//   item.classList.remove(inactiveButtonClass);
//   item.removeAttribute('disabled', 'true');
// }

// const turnButtonOff = (item,inactiveButtonClass) => {
//   item.classList.add(inactiveButtonClass);
//   item.setAttribute('disabled','false');
// }

// const handleValidation = ({formSelector,fieldsetSelector,inactiveButtonClass,inputSelector,submitButtonSelector,inputErrorClass,inputErrorActiveClass}) => {
//   const formList = Array.from(document.querySelectorAll(formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     const fieldsetList = Array.from(formElement.querySelectorAll(fieldsetSelector));
//     fieldsetList.forEach((fieldset) => {
//       setEventListeners(fieldset,inputSelector,submitButtonSelector,inactiveButtonClass);
//     });
//   });
// };


 const validationOptions = {
  formSelector: '.form',
  fieldsetSelector: '.form__fieldset',
  inactiveButtonClass:'form__button_off',
  inputSelector:'.form__input',
  submitButtonSelector: '.form__button',
  inputErrorClass: 'form__input_type_error',
  inputErrorActiveClass: 'form__input-error_active',
}

handleValidation(validationOptions);


