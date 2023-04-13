export default class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  _check(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(this._url + '/cards',{
      method: 'GET',
      headers: this._headers
    })
    .then(this._check);
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: this._headers
    })
    .then(this._check);
  }

  saveUserInfo(data) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._check);
  }

  saveUserAvatar(data) {
    return fetch(this._url + `/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._check);
  }

  addNewCard(data) {
    return fetch(this._url + '/cards',{
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._check);
  }

  like(data) {
    return fetch(this._url + `/cards/${data._id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._check);
  }

  dislike(data) {
    return fetch(this._url + `/cards/${data._id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._check);
  }

  deleteCard(data) {
    return fetch(this._url + `/cards/${data._data._id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._check);
  }
}
