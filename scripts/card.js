export class Card {
  constructor(name, link, selector) {
    this._name = name;
    this._link = link;
    this._description = name;
    this._selector = selector;
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

    this._element.querySelector('.element__img').src = this._link;
    this._element.querySelector('.element__img').alt = this._description;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }

  _handleOpenPopup() {
    document.body.querySelector('.popup-full-img__img').src = this._link;
    document.body.querySelector('.popup-full-img__caption').textContent = this._name;
    document.body.querySelector('.popup-full-img__img').alt = this._description;
    document.body.querySelector('.popup-full-img').classList.add('popup_opened');
  }

  _handleClosePopup() {
    document.body.querySelector('.popup-full-img').classList.remove('popup_opened');
  }

  _handleLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _deleteElement() {
    this._element.querySelector('.element__delete-button').closest('.element').remove();
  }

  _setEventListeners() {
    this._element.querySelector('.element__img').addEventListener('click', () => {
      this._handleOpenPopup();
    });
    document.body.querySelector('.popup-full-img__close').addEventListener('click', () => {
      this._handleClosePopup();
    });
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLike();
    });
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._deleteElement();
    });
  }
}

