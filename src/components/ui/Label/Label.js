import "./label.scss";

export default class Label {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const label = document.createElement("label");

    label.classList.add(this.params.class);

    if (this.params.for) label.htmlFor = this.params.for;

    if (this.params.text) label.textContent = this.params.text;

    return label;
  }
}
