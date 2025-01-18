import "./img.scss";

export default class Img {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const img = document.createElement("img");

    !Array.isArray(this.params.class)
      ? img.classList.add(this.params.class)
      : img.classList.add(...this.params.class);

    img.id = this.params.id;
    img.src = this.params.src;
    img.alt = this.params.alt;

    return img;
  }
}
