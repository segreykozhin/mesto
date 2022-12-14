export class Card {
  constructor(name, link, selector,handleOpenPhoto) {
    this._name = name;
    this._link = link;
    this._description = name;
    this._selector = selector;
    this._handleOpenPhoto = handleOpenPhoto;

  }


  _getTemplate() {
    const cardElement = document
    .querySelector(this._selector)
    .content
    .querySelector('.element')
    .cloneNode(true);


    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._elementImg.src = this._link;
    this._elementImg.alt = this._description;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }



  _handleClosePopup() {
    document.body.querySelector('.popup-full-img').classList.remove('popup_opened');
  }

  _handleLike() {

    this._elementLike.classList.toggle('element__like_active');
  }

  _deleteElement() {
    this._element.remove();
  }

  _setEventListeners() {
    this._elementImg = this._element.querySelector('.element__img');
    this._elementLike = this._element.querySelector('.element__like');
    this._elementImg.addEventListener('click', () => {
      this._handleOpenPhoto(this._link, this._name);
    });
    document.body.querySelector('.popup-full-img__close').addEventListener('click', () => {
      this._handleClosePopup();
    });
    this._elementLike.addEventListener('click', () => {
      this._handleLike();
    });
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._deleteElement();
    });
  }
}

