import "./form.scss";

export default class Form {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const form = document.createElement("form");

    !Array.isArray(this.params.class)
      ? form.classList.add(this.params.class)
      : form.classList.add(...this.params.class);

    return form;
  }
}
