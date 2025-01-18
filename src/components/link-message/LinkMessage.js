import Link from "../ui/Link/Link";
import Div from "../ui/Div/Div";
import Paragraph from "../ui/Paragraph/Paragraph";
import Button from "../ui/Button/Button";

export default class LinkMessage {
  constructor(parentEl, data) {
    this.parentEl = parentEl;
    this.data = data;
  }

  bindToDOM() {
    const messageContainer = new Div({ class: "message-container" }).element;

    const cityParagraph = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city,
    }).element;
    const messageDate = new Paragraph({
      class: "message-date",
      text: "Дата создания: " + this.data.date,
    }).element;
    const link = new Link({
      class: "message-link",
      id: this.data.id,
      href: this.data.message,
      text: "Ссылка: " + this.data.message,
    }).element;

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
      link,
      cityParagraph,
      messageDate,
      actionsFavContainer,
    );
    this.parentEl.appendChild(messageContainer);
  }
}
