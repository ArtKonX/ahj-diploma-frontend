import "./Link.scss";

export default class Link {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const link = document.createElement("a");

    link.classList.add(this.params.class);
    link.id = this.params.id;
    link.href = this.params.href;
    link.textContent = this.params.text;

    return link;
  }
}
