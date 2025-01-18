import Paragraph from "../../ui/Paragraph/Paragraph";
import Button from "../../ui/Button/Button";
import Div from "../../ui/Div/Div";
import Link from "../../ui/Link/Link";

export default class PinMessage {
  constructor(elParent, data) {
    this.elParent = elParent;
    this.data = data;
  }

  bindToDOM() {
    const cityText = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city,
    }).element;
    const mesLink = new Link({
      id: this.data.id,
      class: "message-link-pin-message",
      href: this.data.message,
      text: this.data.message,
    }).element;

    mesLink.style.display = "block";

    const mesText = new Paragraph({
      class: "pin-message",
      text: this.data.message,
      id: this.data.id,
    }).element;
    const btnPin = new Button({
      class: ["btn-pin", "btn-pin_active"],
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

    if (this.data.type == "link") {
      pinMessage.append(btnPin, mesLink, cityText);
    } else {
      pinMessage.append(btnPin, mesText, cityText);
    }

    pinContainerMessage.appendChild(pinContainer);
    pinContainer.appendChild(pinMessage);
    this.elParent.appendChild(pinContainer);
  }
}
