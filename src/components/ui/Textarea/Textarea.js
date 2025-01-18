import "./textarea.scss";

export default class Textarea {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const textarea = document.createElement("textarea");

    textarea.classList.add(this.params.class);
    textarea.name = this.params.name;
    textarea.id = this.params.id;
    textarea.textContent = this.params.text;

    return textarea;
  }
}
