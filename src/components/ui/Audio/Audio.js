import "./audio.scss";

export default class Audio {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const audio = document.createElement("audio");
    audio.controls = this.params.controls;

    const source = document.createElement("source");

    source.src = this.params.src;
    audio.id = this.params.id;
    source.type = this.params.type;

    audio.appendChild(source);

    !Array.isArray(this.params.class)
      ? audio.classList.add(this.params.class)
      : audio.classList.add(...this.params.class);

    return audio;
  }
}
