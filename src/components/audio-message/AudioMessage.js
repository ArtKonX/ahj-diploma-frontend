import Paragraph from "../ui/Paragraph/Paragraph";
import Div from "../ui/Div/Div";
import Button from "../ui/Button/Button";
import Audio from "../ui/Audio/Audio";

export default class AudioMessage {
  constructor(parentEl, data) {
    this.parentEl = parentEl;
    this.data = data;
  }

  bindToDOM() {
    this.audio = new Audio({
      controls: true,
      src: this.data.src,
      id: this.data.id,
      type: this.data.type,
      class: "audio-file",
    }).element;
    const btnDownload = new Button({
      class: "btn-download",
      text: "⬇️",
      type: "button",
    }).element;

    const audioName = new Paragraph({
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
      audioName,
      this.audio,
      messageСoors,
      messageDate,
      btnDownload,
      actionsFavContainer,
    );
    this.parentEl.appendChild(messageContainer);

    this.audio.addEventListener("click", this.addStyleVideo.bind(this));
  }

  addStyleVideo() {
    if (!this.audio.paused) {
      this.audio.classList.add("audio-file_play");
    } else {
      this.audio.classList.remove("audio-file_play");
    }
  }
}
