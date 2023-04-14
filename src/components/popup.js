export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._main = document.querySelector('.root');
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._main.addEventListener('keydown', this._closeByEscape);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._main.removeEventListener('keydown', this._closeByEscape);
  }

  _closeByEscape = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners () {
    this._popup.addEventListener("mousedown", (evt) => {
      if (
        evt.target === evt.currentTarget ||
        evt.target.classList.contains("popup__close-button")
      ) {
        this.close();
      }
    });
  }
}
