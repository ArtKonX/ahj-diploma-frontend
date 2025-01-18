import Video from "../ui/Video/Video";
import Button from "../ui/Button/Button";
import Div from "../ui/Div/Div";
import Paragraph from "../ui/Paragraph/Paragraph";

export default class VideoMessage {
  constructor(parentEl, data) {
    this.parentEl = parentEl;
    this.data = data;
  }

  bindToDOM() {
    console.log(this.data.src);
    this.video = new Video({
      controls: true,
      class: "video-file",
      src: this.data.src,
      type: this.data.type,
      id: this.data.id,
    }).element;

    const btnDownload = new Button({
      class: "btn-download",
      text: "⬇️",
      type: "button",
    }).element;

    const videoName = new Paragraph({
      class: "file-name",
      text: `Название аудио - ${this.data.name}`,
    }).element;
    const messageDate = new Paragraph({
      class: "message-date",
      text: "Дата создания: " + this.data.date,
    }).element;

    const messageContainer = new Div({ class: "message-container" }).element;
    const messageСoors = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city,
    }).element;

    const btnPin = new Button({
      class: ["btn-pin"],
      text: "📌",
      type: "button",
      id: "id" + this.data.id.replaceAll("-", ""),
    }).element;

    if (this.data.pin === true) {
      btnPin.classList.add("btn-pin_active");
    }
    const btnAddFav = new Button({
      class: "btn-fav-add",
      text: "Добавить в избранное",
      type: "button",
    }).element;
    const btnDelFav = new Button({
      class: "btn-fav-del",
      text: "Удалить из избранного",
      type: "button",
    }).element;
    const actionsFavContainer = new Div({ class: "actions-fav-container" })
      .element;
    actionsFavContainer.append(btnAddFav, btnDelFav);
    messageContainer.append(
      btnPin,
      videoName,
      this.video,
      messageСoors,
      messageDate,
      btnDownload,
      actionsFavContainer,
    );

    this.parentEl.appendChild(messageContainer);

    this.video.addEventListener("click", this.addStyleVideo.bind(this));
  }

  addStyleVideo() {
    if (!this.video.paused && !this.video.ended) {
      this.video.classList.add("video-file_play");
    } else {
      this.video.classList.remove("video-file_play");
    }
  }
}
