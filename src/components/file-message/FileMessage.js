import Button from "../ui/Button/Button";
import Div from "../ui/Div/Div";
import Link from "../ui/Link/Link";
import Paragraph from "../ui/Paragraph/Paragraph";
import Span from "../ui/Span/Span";

export default class FileMessage {
  constructor(parentEl, data, download) {
    this.parentEl = parentEl;
    this.data = data;
    this.download = download;
  }

  bindToDOM() {
    const messageContainer = new Div({ class: "message-container" }).element;
    const messageСoors = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city,
    }).element;

    const spanIconFile = new Span({ class: "span-icon-file" }).element;
    const messageDate = new Paragraph({
      class: "message-date",
      text: "Дата создания: " + this.data.date,
    }).element;
    const fileName = new Paragraph({
      class: "file-name",
      text: `Название файла - ${this.data.name}`,
    }).element;

    const messageLinkFile = new Link({
      id: this.data.id,
      class: "message-link-file",
      href: this.data.src,
      text: "Скачать файл",
    }).element;

    messageLinkFile.download = this.download;
    messageLinkFile.appendChild(spanIconFile);

    const actionsFavContainer = new Div({ class: "actions-fav-container" })
      .element;

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

    actionsFavContainer.append(btnAddFav, btnDelFav);

    const btnPin = new Button({
      class: "btn-pin",
      text: "📌",
      type: "button",
      id: "id" + this.data.id.replaceAll("-", ""),
    }).element;

    if (this.data.pin === true) {
      btnPin.classList.add("btn-pin_active");
    }

    messageContainer.append(
      btnPin,
      fileName,
      messageLinkFile,
      messageСoors,
      messageDate,
      actionsFavContainer,
    );
    this.parentEl.appendChild(messageContainer);
  }
}
