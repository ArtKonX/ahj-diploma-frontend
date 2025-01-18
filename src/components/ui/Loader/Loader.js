import "./loader.scss";
import Div from "../Div/Div";

export default class Loader {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const loader = new Div({ class: this.params.class }).element;

    return loader;
  }
}
