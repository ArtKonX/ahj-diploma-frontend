import "./heading.scss";

export default class Heading {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const heading = document.createElement(`h${this.getLevel()}`);

    heading.classList.add(this.params.class);
    heading.textContent = this.params.text;

    return heading;
  }

  getLevel() {
    if (this.params.level in [1, 2, 3, 4, 5, 6]) return this.params.level;
    throw new Error(
      "Вы указали не число или число не входящее в промежутке от 1 до 6",
    );
  }
}
