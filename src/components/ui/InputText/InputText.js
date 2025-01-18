import "./inputText.scss";

export default class InputText {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const inputText = document.createElement("input");

    inputText.name = this.params.name;
    inputText.id = this.params.id;
    inputText.type = "text";
    inputText.classList.add(this.params.class);
    inputText.value = this.params.value;

    return inputText;
  }
}
