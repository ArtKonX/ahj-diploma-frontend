import "./span.scss";

export default class Span {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const span = document.createElement("span");

    span.classList.add(this.params.class);

    if (this.params.text) span.textContent = this.params.text;

    return span;
  }
}
