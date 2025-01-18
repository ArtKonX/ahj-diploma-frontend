import "./paragraph.scss";

export default class Paragraph {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const p = document.createElement("p");

    !Array.isArray(this.params.class)
      ? p.classList.add(this.params.class)
      : p.classList.add(...this.params.class);

    p.textContent = this.params.text;

    if (this.params.id) p.id = this.params.id;

    return p;
  }
}
