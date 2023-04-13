export class Card {
  constructor(data, userId,selector,{handleOpenPhoto,handleLikeCard,handleDislikeCard,handleDeleteCard}) {
    this._data = data;
    this._userId = userId;
    this._ownerID = data.owner._id;
    this._name = data.name;
    this._link = data.link;
    this._description = data.name;
    this._selector = selector;
    this._handleOpenPhoto = handleOpenPhoto;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
    this._handleDislikeCard = handleDislikeCard;
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
    this.numberOfLikes = this._element.querySelector('.element__likesum');
    this._cart = this._element.querySelector('.element__delete-button');

    this._likeUpdate(this._data);

    if (this._ownerID !== this._userId) {
      this._cart.classList.add("element__delete-button_hidden");
    }
    return this._element;
  }

  _toggleLike() {
    if (this._data.likes.some((item) => item._id === this._userId)) {
      this._handleDislikeCard(this._data);
    } else {
      this._handleLikeCard(this._data);
    }
  }

  handleDislike(data) {
    this._elementLike.classList.remove('element__like_active');
    this._likeUpdate(data);
  }

  handleLike(data) {
    this._elementLike.classList.add('element__like_active');
    this._likeUpdate(data);

  }

  _likeUpdate(data) {
    this._data.likes = data.likes;
    this.numberOfLikes.textContent = String(this._data.likes.length);
  }

  deleteElement() {
    this._element.remove();
  }

  _setEventListeners() {
    this._elementImg = this._element.querySelector('.element__img');
    this._elementLike = this._element.querySelector('.element__like');
    this._cart = this._element.querySelector('.element__delete-button');
    this._elementImg.addEventListener('click', () => {
      this._handleOpenPhoto(this._link, this._name);
    });
    this._cart.addEventListener('click', () => {
      this._handleDeleteCard(this);
    })
    this._elementLike.addEventListener('click', () => {
      this._toggleLike();
    });
  }
}
