//  export class FormValidator {
//   constructor(config, form) {
//     this._form = form;
//     this._config = config;
//   }
// }


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


// export const validationOptions = {
//   formSelector: '.form',
//   fieldsetSelector: '.form__fieldset',
//   inactiveButtonClass:'form__button_off',
//   inputSelector:'.form__input',
//   submitButtonSelector: '.form__button',
//   inputErrorClass: 'form__input_type_error',
//   inputErrorActiveClass: 'form__input-error_active',
// }

// handleValidation(validationOptions);


const showErrors = (formElement,inputElement, errorMessage,config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.inputErrorActiveClass);
};

const hideErrors = (formElement,inputElement,config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.inputErrorActiveClass);
  errorElement.textContent = '';
};

const checkValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showErrors(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideErrors(formElement, inputElement);
  }
};

const setEventListeners = (formElement,config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButton(inputList, buttonElement,config.inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkValidity(formElement, inputElement);
       toggleButton(inputList, buttonElement,config.inactiveButtonClass);
    });
  });
};

const hasInvalidInput=(inputList) =>{
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButton=(inputList,buttonElement,config) => {
  if (hasInvalidInput(inputList)) {
    turnButtonOff(buttonElement,config.inactiveButtonClass);
  } else {
    turnButtonOn(buttonElement,config.inactiveButtonClass);
  };
}

const turnButtonOn = (item,config) => {
  item.classList.remove(config.inactiveButtonClass);
  item.removeAttribute('disabled', 'true');
}

const turnButtonOff = (item,config) => {
  item.classList.add(config.inactiveButtonClass);
  item.setAttribute('disabled','false');
}

const handleValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll(config.fieldsetSelector));
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset,config.inputSelector,config.submitButtonSelector,config.inactiveButtonClass);
    });
  });
};


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
