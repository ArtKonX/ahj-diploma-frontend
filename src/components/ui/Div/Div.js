import "./div.scss";

export default class Div {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const div = document.createElement("div");

    !Array.isArray(this.params.class)
      ? div.classList.add(this.params.class)
      : div.classList.add(...this.params.class);

    if (this.params.id) div.id = this.params.id;

    return div;
  }
}
