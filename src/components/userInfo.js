export default class UserInfo {
  constructor({nameSelector, infoSelector}) {
    this._nameSelector = document.querySelector(nameSelector);
    this._infoSelector = document.querySelector(infoSelector);
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      info: this._infoSelector.textContent
    }
  }

  setUserInfo(data) {
    this._nameSelector.textContent=data.name;
    this._infoSelector.textContent=data.info;
  }

}
