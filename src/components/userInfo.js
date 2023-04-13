export default class UserInfo {
  constructor({nameSelector, infoSelector, avatarSelector}) {
    this._nameElement = document.querySelector(nameSelector);
    this._infoElement = document.querySelector(infoSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._infoElement.textContent,
      avatar:this._avatarElement.src
    }
  }

  setUserInfo(data) {
    this._nameElement.textContent=data.name;
    this._infoElement.textContent=data.about;
    this._avatarElement.src=data.avatar;
  }
}
