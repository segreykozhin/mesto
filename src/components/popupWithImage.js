import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup-full-img__img');
    this._description = this._popup.querySelector('.popup-full-img__caption');
  }

  open(link, name) {
    this._image.src = link;
    this._description.textContent = name;
    this._image.alt = name;
    super.open();
  }
}
