import Div from "../ui/Div/Div";
import Input from "../ui/Input/Input";
import Form from "../ui/Form/Form";
import Paragraph from "../ui/Paragraph/Paragraph";
import Button from "../ui/Button/Button";
import Span from "../ui/Span/Span";
import ViewingSelectedFiles from "../viewing-selected-files/ViewingSelectedFiles";
import WidgetTooltip from "../widget-tooltip/WidgetTooltip";
import Loader from "../ui/Loader/Loader";
import getCurrentCity from "../../utils/getCurrentCity";

export default class InputSendFilesMessages {
  constructor(parentEl, api, alreadyMessages, chatContainer, stateApp) {
    this.parentEl = parentEl;
    this.api = api;
    this.alreadyMessages = alreadyMessages;

    this.chatContainer = chatContainer;
    this.stateApp = stateApp;
    this.userId = this.stateApp.load().id;

    this.onEnterSendMessage = this.onEnterSendMessage.bind(this);
    this.onChangeFiles = this.onChangeFiles.bind(this);
  }

  bindToDOM() {
    (async () =>
      (this.city = await getCurrentCity().then((data) =>
        data.city && data.country ? `${data.city}, ${data.country}` : data,
      )))();

    this.body = document.querySelector("body");

    this.sendMessageContainer = new Div({
      class: "send-message-container",
    }).element;
    this.sendMessageInput = new Input({
      class: "send-message",
      type: "text",
      placeholder: "Напишите сообщение...",
    }).element;

    this.sendMessageContainer.appendChild(this.sendMessageInput);

    this.containerActionsFiles = new Div({ class: "container-files" }).element;

    this.formFiles = new Form({ class: "form-files" }).element;
    this.placeDND = new Paragraph({
      class: "place-dnd",
      text: "Переместите сюда файлы",
    }).element;

    this.inputFiles = new Input({
      class: "input-files",
      type: "file",
      name: "file",
    }).element;
    this.inputFiles.multiple = true;
    this.buttonCloseFile = new Button({
      class: "close-file-btn",
      type: "button",
      text: "Отмена",
    }).element;
    this.buttonSubmit = new Button({
      class: "send-file-btn",
      type: "submit",
      text: "Отправить)",
    }).element;

    this.formFiles.append(this.placeDND, this.containerActionsFiles);

    this.containerСhoiceFiles = new Div({
      class: "container-choice-files",
    }).element;
    this.styleWrapperFiles = new Span({
      class: "style-wrapper-files",
      text: "Выбрать файлы...",
    }).element;

    this.containerСhoiceFiles.append(this.inputFiles, this.styleWrapperFiles);

    this.containerActionsFiles.append(
      this.buttonCloseFile,
      this.containerСhoiceFiles,
      this.buttonSubmit,
    );

    this.containerAddFiles = new Div({ class: "container-add-files" }).element;

    this.buttonAddFiles = new Button({
      class: "btn-add-files",
      type: "button",
      text: "",
    }).element;

    this.containerAddFiles.append(this.buttonAddFiles);

    this.sendMessageContainer.appendChild(this.containerAddFiles);

    this.parentEl.append(this.sendMessageContainer);
  }

  subscribeToEvents() {
    this.sendMessageInput.addEventListener("keyup", (e) => {
      if (e.code === "Enter") {
        this.onEnterSendMessage(e);
      }
    });

    this.buttonAddFiles.addEventListener(
      "click",
      this.toggleFileSend.bind(this),
    );
    this.buttonCloseFile.addEventListener(
      "click",
      this.toggleFileSend.bind(this),
    );

    ["dragover", "drop"].forEach(function (event) {
      document.addEventListener(event, function (evt) {
        evt.preventDefault();
        return false;
      });
    });

    this.placeDND.addEventListener(
      "dragenter",
      function () {
        this.placeDND.classList.add("_active");
      }.bind(this),
    );

    this.placeDND.addEventListener(
      "dragleave",
      function () {
        this.placeDND.classList.remove("_active");
      }.bind(this),
    );

    this.placeDND.addEventListener(
      "drop",
      function (event) {
        this.placeDND.classList.remove("_active");

        this.files = [];

        this.files.push(...event.dataTransfer.files);

        const viewingSelectedFiles = new ViewingSelectedFiles(
          this.previewFilesContainer,
          this.inputFiles,
          this.files,
        );
        if (this.files.length < 6) {
          viewingSelectedFiles.bindToDOM();
          this.formFiles.addEventListener("submit", (e) => {
            this.onChangeFiles(e, this.files);
          });
        }

        if (this.files.length > 5) {
          console.error("Максимум для отправки 5 файлов");
          this.files = [];
          if (
            [...document.querySelectorAll(".preview-file-container")].length > 0
          ) {
            [...document.querySelectorAll(".preview-file-container")].forEach(
              (elem) => {
                elem.remove();
              },
            );
          }

          this.files.push(...event.dataTransfer.files);
        }
      }.bind(this),
    );

    this.inputFiles.addEventListener("change", () => {
      this.files = [];

      this.files.push(...this.inputFiles.files);

      const viewingSelectedFiles = new ViewingSelectedFiles(
        this.previewFilesContainer,
        this.inputFiles,
        this.files,
      );

      if (this.files.length < 6) {
        viewingSelectedFiles.bindToDOM();
        this.formFiles.addEventListener("submit", (e) => {
          this.onChangeFiles(e, this.files);
        });
      }

      if (this.files.length > 5) {
        const widgetTooltip = new WidgetTooltip(this.inputFiles);

        widgetTooltip.actionTooltip("Максимум для отправки 5 файлов");
        console.error("Максимум для отправки 5 файлов");

        this.files = [];
        if (
          [...document.querySelectorAll(".preview-file-container")].length > 0
        ) {
          [...document.querySelectorAll(".preview-file-container")].forEach(
            (elem) => {
              elem.remove();
            },
          );
        }

        this.files.push(...this.inputFiles.files);
      }
    });
  }

  setListMediaFiles(listMediaFiles, mainWebsocket) {
    this.listMediaFiles = listMediaFiles;
    this.mainWebsocket = mainWebsocket;
  }

  onEnterSendMessage(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    this.api.createMessage(
      { userId: this.userId, id: id, message: e.target.value, city: this.city },
      (message) => {
        if (message.status == "ok") {
          console.log(message.message);
          if (message.messageUser && message.messageBot) {
            this.count += 2;
            this.alreadyMessages.unshift(message.messageUser.id);
            this.alreadyMessages.unshift(message.messageBot.id);

            this.listMediaFiles.rewriteAlreadyMessagesInCurrentTab(
              this.alreadyMessages,
            );
            this.mainWebsocket.sendInWebsocket("text", {
              date: message.messageUser.date,
              userId: this.userId,
              id: message.messageUser.id,
              message: message.messageUser.message,
              city: this.city,
              pin: false,
              type: message.messageUser.type,
            });
            this.mainWebsocket.sendInWebsocket("text", {
              date: message.messageBot.date,
              userId: this.userId,
              id: message.messageBot.id,
              message: message.messageBot.message,
              city: message.messageBot.city,
              pin: false,
              type: message.messageBot.type,
            });
          } else {
            this.count++;
            this.alreadyMessages.unshift(message.messageUser.id);

            this.listMediaFiles.rewriteAlreadyMessagesInCurrentTab(
              this.alreadyMessages,
            );
            this.mainWebsocket.sendInWebsocket("text", {
              date: message.messageUser.date,
              userId: this.userId,
              id: message.messageUser.id,
              message: message.messageUser.message,
              city: this.city,
              pin: false,
              type: message.messageUser.type,
            });
          }
        } else {
          console.error(message.message);
        }
      },
    );
    e.target.value = "";
  }

  async onChangeFiles(e, files) {
    e.preventDefault();

    this.loader = new Loader({ class: "loader" }).element;
    this.body.appendChild(this.loader);

    if (files.length > 1) {
      files.forEach((file) => {
        const id = crypto.randomUUID();
        const formData = new FormData();
        formData.append("userId", this.userId);
        formData.append("file", file);
        formData.append("city", this.city);
        formData.append("id", id);

        this.api.sendFile(formData, (data) => {
          if (data.status == "ok") {
            console.log(data.message);
            this.mainWebsocket.sendInWebsocket("file", {
              date: data.file.date,
              userId: this.userId,
              id: data.file.id,
              type: data.file.type,
              src: data.file.src,
              city: this.city,
              pin: false,
              name: data.file.name,
            });

            this.loader.remove();
            this.alreadyMessages.unshift(data.file.id);

            this.listMediaFiles.rewriteAlreadyMessagesInCurrentTab(
              this.alreadyMessages,
            );
            this.inputFiles.value = "";
            this.formFiles.reset();
            this.toggleFileSend();
            this.files = [];

            if (
              [...document.querySelectorAll(".preview-files-container")]
                .length > 0
            ) {
              [
                ...document.querySelectorAll(".preview-files-container"),
              ].forEach((elem) => {
                elem.remove();
              });
            }

            this.files = [];
          } else {
            console.error(data.message);

            this.loader.remove();
            const widgetTooltip = new WidgetTooltip(this.inputFiles);
            widgetTooltip.actionTooltip(data.message);

            this.inputFiles.value = "";
            this.formFiles.reset();

            this.files = [];
            if (
              [...document.querySelectorAll(".preview-file-container")].length >
              0
            ) {
              [...document.querySelectorAll(".preview-file-container")].forEach(
                (elem) => {
                  elem.remove();
                },
              );
            }
            const viewingSelectedFiles = new ViewingSelectedFiles(
              this.previewFilesContainer,
              this.inputFiles,
              this.files,
            );
            viewingSelectedFiles.bindToDOM();
          }
        });
      });
    } else {
      const id = crypto.randomUUID();
      const formData = new FormData();
      formData.append("userId", this.userId);
      formData.append("file", files[0]);
      formData.append("city", this.city);
      formData.append("id", id);

      this.api.sendFile(formData, (data) => {
        if (data.status == "ok") {
          console.log(data.message);
          this.mainWebsocket.sendInWebsocket("file", {
            date: data.file.date,
            userId: this.userId,
            id: data.file.id,
            type: data.file.type,
            src: data.file.src,
            city: this.city,
            pin: false,
            name: data.file.name,
          });
          this.alreadyMessages.unshift(data.file.id);
          this.loader.remove();

          this.listMediaFiles.rewriteAlreadyMessagesInCurrentTab(
            this.alreadyMessages,
          );

          this.inputFiles.value = "";
          this.formFiles.reset();
          this.toggleFileSend();
          this.files = [];

          if (
            [...document.querySelectorAll(".preview-files-container")].length >
            0
          ) {
            [...document.querySelectorAll(".preview-files-container")].forEach(
              (elem) => {
                elem.remove();
              },
            );
          }
        } else {
          console.error(data.message);
          this.loader.remove();
          const widgetTooltip = new WidgetTooltip(this.inputFiles);
          widgetTooltip.actionTooltip(data.message);
          this.inputFiles.value = "";
          this.formFiles.reset();
          this.files = [];
          if (
            [...document.querySelectorAll(".preview-file-container")].length > 0
          ) {
            [...document.querySelectorAll(".preview-file-container")].forEach(
              (elem) => {
                elem.remove();
              },
            );
          }

          const viewingSelectedFiles = new ViewingSelectedFiles(
            this.previewFilesContainer,
            this.inputFiles,
            this.files,
          );
          viewingSelectedFiles.bindToDOM();
        }
      });
    }
  }

  toggleFileSend() {
    if (
      document.querySelector(".send-message-container") &&
      !document.querySelector(".form-files")
    ) {
      document.querySelector(".send-message-container").remove();
      this.chatContainer.append(this.formFiles);

      const listHistoryFiles = [
        ...document.querySelectorAll(".file-name-text-btn"),
      ];
      listHistoryFiles.forEach((elem) => {
        elem.disabled = true;
      });

      this.previewFilesContainer = new Div({
        class: "preview-files-container",
      }).element;

      this.previewFilesContainer.style.bottom = `${this.inputFiles.clientHeight + 30}px`;
      this.formFiles.appendChild(this.previewFilesContainer);
    } else {
      if (
        [...document.querySelectorAll(".preview-files-container")].length > 0
      ) {
        [...document.querySelectorAll(".preview-files-container")].forEach(
          (elem) => {
            elem.remove();
          },
        );
      }

      const listHistoryFiles = [
        ...document.querySelectorAll(".file-name-text-btn"),
      ];
      listHistoryFiles.forEach((elem) => {
        elem.disabled = false;
      });

      this.files = [];
      document.querySelector(".form-files").remove();

      this.chatContainer.append(this.sendMessageContainer);
    }
  }
}
