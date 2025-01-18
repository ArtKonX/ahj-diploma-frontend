import "./ul.scss";

export default class Ul {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    this.ul = document.createElement("ul");

    this.ul.classList.add(this.params.class);

    return this.ul;
  }
}
