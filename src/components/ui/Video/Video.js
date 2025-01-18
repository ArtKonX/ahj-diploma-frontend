import "./video.scss";

export default class Video {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const video = document.createElement("video");

    video.controls = this.params.controls;
    video.classList.add(this.params.class);

    const source = document.createElement("source");

    source.src = this.params.src;
    source.type = this.params.type;
    video.id = this.params.id;

    video.appendChild(source);

    return video;
  }
}
