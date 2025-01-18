import Paragraph from "../ui/Paragraph/Paragraph";
import Div from "../ui/Div/Div";
import Button from "../ui/Button/Button";

export default class TextMessage {
  constructor(parentEl, data) {
    this.parentEl = parentEl;
    this.data = data;
  }

  bindToDOM() {
    const textMes = new Paragraph({ class: "message", text: this.data.message })
      .element;
    textMes.id = this.data.id;
    const messageContainer = new Div({ class: "message-container" }).element;
    const messageСoors = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city,
    }).element;
    const messageDate = new Paragraph({
      class: "message-date",
      text: "Дата создания: " + this.data.date,
    }).element;
    const btnPin = new Button({
      class: "btn-pin",
      text: "📌",
      type: "button",
      id: "id" + this.data.id.replaceAll("-", ""),
    }).element;

    if (this.data.pin === true) {
      btnPin.classList.add("btn-pin_active");
    }
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
    messageContainer.append(
      btnPin,
      textMes,
      messageСoors,
      messageDate,
      actionsFavContainer,
    );
    this.parentEl.appendChild(messageContainer);
  }
}
