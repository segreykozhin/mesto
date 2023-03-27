const main = document.querySelector('.root');

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    main.addEventListener('keydown', this._closeByEscape);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    main.removeEventListener('keydown', this._closeByEscape);
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
