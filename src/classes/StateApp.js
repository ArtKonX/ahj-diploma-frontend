export default class StateApp {
  constructor() {
    this._user = [];
  }

  init() {
    this.save(this.user);
  }

  get user() {
    return this._user;
  }

  save(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  load() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
