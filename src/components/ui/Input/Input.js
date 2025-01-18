import "./input.scss";

export default class Input {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const input = document.createElement("input");

    input.classList.add(this.params.class);
    input.type = this.params.type;
    if (this.params.id) input.id = this.params.id;
    if (this.params.name) input.name = this.params.name;
    if (this.params.placeholder) input.placeholder = this.params.placeholder;
    if (this.params.required) input.required = this.params.required;

    return input;
  }
}
