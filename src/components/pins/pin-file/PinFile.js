import Paragraph from "../../ui/Paragraph/Paragraph";
import Button from "../../ui/Button/Button";
import Div from "../../ui/Div/Div";

export default class PinFile {
  constructor(elParent, data) {
    this.elParent = elParent;
    this.data = data;
  }

  bindToDOM() {
    const textMes = new Paragraph({
      class: "pin-message",
      text: "Тип файла - " + this.data.type,
      id: this.data.id,
    }).element;
    const textNameFile = new Paragraph({
      class: "pin-name-message",
      text: "Имя файла - " + this.data.name,
    }).element;
    const btnDownload = new Button({
      class: "btn-download",
      text: "⬇️",
      type: "button",
    }).element;
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
    const pinMessage = new Div({ class: "pin-message-all" }).element;
    const pinContainer = new Div({ class: "pin-message-container" }).element;
    const pinContainerMessage = new Div({ class: "pin-message-container-mess" })
      .element;

    if (this.data.pin === true) {
      btnPin.classList.add("btn-pin_active");
    }
    pinContainerMessage.appendChild(pinContainer);
    pinMessage.append(btnPin, textMes, textNameFile, messageСoors, btnDownload);
    pinContainer.appendChild(pinMessage);
    this.elParent.appendChild(pinContainer);
  }
}
