import Div from "../ui/Div/Div";
import Span from "../ui/Span/Span";
import Paragraph from "../ui/Paragraph/Paragraph";
import Button from "../ui/Button/Button";
import addingActiveTabForText from "../../functions/addingActiveTabForText";

export default class Header {
  constructor(parentEl, api, stateApp) {
    this.parentEl = parentEl;
    this.api = api;
    this.stateApp = stateApp;
  }

  bindToDOM() {
    this.userName = this.stateApp.load();

    this.header = new Div({ class: "header" }).element;

    this.headerBurgerLogo = new Div({ class: "header-burger-logo" }).element;
    this.headerBurger = new Span({ class: "header-burger" }).element;
    this.headerLogo = new Span({
      class: "header-logo",
      text: "OurTelegram",
    }).element;
    this.headerBurgerLogo.append(this.headerBurger, this.headerLogo);

    this.headerUserStatusContainer = new Div({
      class: "user-status-container",
    }).element;
    this.headerNameUser = new Span({
      class: "name-user",
      text: this.userName.name,
    }).element;
    this.headerFriendStatus = new Paragraph({
      class: "header-status",
      text: this.userName.status,
    }).element;
    this.headerUserStatusContainer.append(
      this.headerNameUser,
      this.headerFriendStatus,
    );

    this.btnExit = new Button({ class: "btn-exit", text: "Выйти" }).element;

    this.header.append(
      this.headerBurgerLogo,
      this.headerUserStatusContainer,
      this.btnExit,
    );

    this.parentEl.appendChild(this.header);

    this.headerLogo.addEventListener("click", this.goToAllMessages.bind(this));
  }

  goToAllMessages() {
    localStorage.setItem(
      "currentTab",
      JSON.stringify({ currentTab: "allMessages" }),
    );
    addingActiveTabForText("file-name-info-element", "allMessages");
    location.reload();
  }

  subscribeToEvents() {
    if (this.historyFilesContainer) {
      this.headerBurger.addEventListener(
        "click",
        this.toggleMediaBlock.bind(this),
      );
    }

    this.btnExit.addEventListener("click", this.exitUser.bind(this));
  }

  exitUser() {
    console.log(this.api);
    this.api.exitUser({ id: this.userName.id }, (data) => {
      if (data.status == "ok") {
        localStorage.removeItem("user");
        localStorage.removeItem("currentTab");
        location.reload();
      } else {
        console.error(data.message);
      }
    });
  }

  toggleMediaBlock() {
    this.historyFilesContainer.classList.toggle(
      "history-files-container_hidden",
    );
    if (document.querySelector(".history-files-container_hidden")) {
      if (document.querySelector(".pin-message-container"))
        document.querySelector(".pin-message-container").style.maxWidth =
          "97.8%";
      document.querySelector(".send-message-container").style.maxWidth =
        "97.8%";
    } else {
      if (document.querySelector(".pin-message-container"))
        document.querySelector(".pin-message-container").style.maxWidth =
          "calc(100% - 259.34px)";
      document.querySelector(".send-message-container").style.maxWidth =
        "calc(100% - 259.34px)";
    }
  }

  setHistoryFilesContainer(historyFilesContainer) {
    this.historyFilesContainer = historyFilesContainer;
  }
}
