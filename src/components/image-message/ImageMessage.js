import Img from "../ui/Img/Img";
import Button from "../ui/Button/Button";
import Div from "../ui/Div/Div";
import Paragraph from "../ui/Paragraph/Paragraph";

export default class ImageMessage {
  constructor(parentEl, data) {
    this.parentEl = parentEl;
    this.data = data;
  }

  bindToDOM() {
    const btnDownload = new Button({
      class: "btn-download",
      text: "⬇️",
      type: "button",
    }).element;
    const imgName = new Paragraph({
      class: "file-name",
      text: `Название изображения - ${this.data.name}`,
    }).element;
    const img = new Img({
      class: "img-file",
      src: this.data.src,
      alt: this.data.name,
      id: this.data.id,
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
      imgName,
      img,
      messageСoors,
      messageDate,
      btnDownload,
      actionsFavContainer,
    );

    this.parentEl.appendChild(messageContainer);
  }
}
