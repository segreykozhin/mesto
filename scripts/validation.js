const showErrors = (formElement,inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideErrors = (formElement,inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showErrors(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideErrors(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__button');
  toggleButton(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkValidity(formElement, inputElement);
       toggleButton(inputList, buttonElement);
    });
  });
};

const hasInvalidInput=(inputList) =>{
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButton=(inputList,buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__button_off');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove('form__button_off');
    buttonElement.removeAttribute('disabled', 'disabled');
  };
}

const handleValidation = ({formSelector,fieldsetSelector}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll(fieldsetSelector));
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
};

handleValidation({
  formSelector: '.form',
  fieldsetSelector: '.form__fieldset'
});
