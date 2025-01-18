import "./list.scss";

export default class List {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const ul = document.createElement("ul");

    ul.classList.add(this.params.class);

    if (this.params.data) {
      this.params.data.forEach((dataElem) => {
        const li = document.createElement("li");
        if (dataElem.id === this.params.currentdataElemId) {
          li.classList.add(
            ...[this.params.userNameClass, this.params.nameDifferentClass],
          );
          li.textContent = this.params.nameCurrentUser;
        } else {
          li.classList.add(this.params.nameDifferentClass);
          li.textContent = dataElem.name;
        }

        ul.appendChild(li);
      });
    }

    return ul;
  }
}
