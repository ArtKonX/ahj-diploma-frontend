import "./time.scss";

export default class Time {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const time = document.createElement("time");

    time.classList.add(this.params.class);
    time.textContent = this.dateCreatedFormatted(this.params.dateCreated);

    return time;
  }

  dateCreatedFormatted(date) {
    const dateCreated = new Date(date);

    return dateCreated
      .toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(",", "");
  }
}
