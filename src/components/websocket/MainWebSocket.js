import PinDisplay from "../pin-display/PinDisplay";
import PinMessage from "../pins/pin-message/PinMessage";
import PinFile from "../pins/pin-file/PinFile";

export default class MainWebSocket {
  constructor(
    url,
    differentMessages,
    addedNumberInCount,
    parentEl,
    stateApp,
    api,
  ) {
    this.websocket = new WebSocket(url);

    this.differentMessages = differentMessages;
    this.addedNumberInCount = addedNumberInCount;

    this.parentEl = parentEl;
    this.stateApp = stateApp;

    this.api = api;

    this.userId = this.stateApp.load().id;
  }

  async subscribeOnEvents(listCounts, chatContainer) {
    this.listCounts = listCounts;
    this.chatContainer = chatContainer;

    this.websocket.addEventListener("open", () => {});

    this.websocket.addEventListener("message", (e) => {
      const data = JSON.parse(e.data);

      if (this.userId == data.userId) {
        if (data.type) {
          if (data.type == "link") {
            const linkMessage = new this.differentMessages.linkMessage(
              this.parentEl,
              data,
            );
            linkMessage.bindToDOM();

            const addedNumberInCount = new this.addedNumberInCount(
              this.listCounts,
              "Ссылки",
            );
            addedNumberInCount.addNumberInCount();
          } else if (data.type == "different") {
            const textMessage = new this.differentMessages.textMessage(
              this.parentEl,
              data,
            );
            textMessage.bindToDOM();

            const addedNumberInCount = new this.addedNumberInCount(
              this.listCounts,
              "",
            );
            addedNumberInCount.addNumberInCount();
          } else if (data.type.includes("image")) {
            const imageMessage = new this.differentMessages.imageMessage(
              this.parentEl,
              data,
            );
            imageMessage.bindToDOM();

            const addedNumberInCount = new this.addedNumberInCount(
              this.listCounts,
              "Изображения",
            );
            addedNumberInCount.addNumberInCount();
          } else if (data.type.includes("video")) {
            const videoMessage = new this.differentMessages.videoMessage(
              this.parentEl,
              data,
            );
            videoMessage.bindToDOM();

            const addedNumberInCount = new this.addedNumberInCount(
              this.listCounts,
              "Видео",
            );
            addedNumberInCount.addNumberInCount();
          } else if (data.type.includes("audio")) {
            const audioMessage = new this.differentMessages.audioMessage(
              this.parentEl,
              data,
            );
            audioMessage.bindToDOM();

            const addedNumberInCount = new this.addedNumberInCount(
              this.listCounts,
              "Аудио",
            );
            addedNumberInCount.addNumberInCount();
          } else if (data.type.includes("application")) {
            const fileMessage = new this.differentMessages.fileMessage(
              this.parentEl,
              data,
              true,
            );
            fileMessage.bindToDOM();

            const addedNumberInCount = new this.addedNumberInCount(
              this.listCounts,
              "Файлы",
            );
            addedNumberInCount.addNumberInCount();
          }
        } else if (data.count) {
          this.listCounts.forEach((element) => {
            if (element.textContent == data.nameCount) {
              element.nextElementSibling.textContent = data.count;
            }
          });
        } else if (data.pin == true && data.idPin) {
          console.log(`#${data.idPin}`);
          document.querySelector(".btn-pin_active") &&
            document
              .querySelector(".btn-pin_active")
              .classList.remove("btn-pin_active");
          // data.pinBtn.classList.add('btn-pin_active');
          document.querySelector(`#${data.idPin}`) &&
            document
              .querySelector(`#${data.idPin}`)
              .classList.add("btn-pin_active");
          if (document.querySelector(".pin-message-container"))
            document.querySelector(".pin-message-container").remove();
          this.pinDisplay = new PinDisplay(
            this.chatContainer,
            this.api,
            { pinMessage: PinMessage, pinFile: PinFile },
            this.stateApp,
          );
          this.pinDisplay.bindToDOM();
        } else if (data.pin == false && data.idPin) {
          console.log(`#${data.idPin}`);
          if (document.querySelector(".pin-message-container"))
            document
              .querySelector(".pin-message-container")
              .remove("btn-pin_active");
          document.querySelector(`#${data.idPin}`) &&
            document.querySelector(`#${data.idPin}`).classList.remove();
          this.pinDisplay = new PinDisplay(
            this.chatContainer,
            this.api,
            { pinMessage: PinMessage, pinFile: PinFile },
            this.stateApp,
          );
          this.pinDisplay.bindToDOM();
          document.querySelector(".btn-pin_active") &&
            document
              .querySelector(".btn-pin_active")
              .classList.remove("btn-pin_active");
        }
      }
    });
  }

  sendInWebsocket(typeMessage, params) {
    if (typeMessage == "text") {
      this.websocket.send(
        JSON.stringify({
          date: params.date,
          userId: params.userId,
          id: params.id,
          message: params.message,
          city: params.city,
          pin: params.pin,
          type: params.type,
        }),
      );
    } else if (typeMessage == "file") {
      this.websocket.send(
        JSON.stringify({
          date: params.date,
          userId: params.userId,
          id: params.id,
          type: params.type,
          src: params.src,
          city: params.city,
          pin: params.pin,
          name: params.name,
        }),
      );
    } else if (typeMessage == "count") {
      this.websocket.send(
        JSON.stringify({
          userId: params.userId,
          count: params.count,
          nameCount: params.nameCount,
        }),
      );
    } else if (typeMessage == "pin") {
      this.websocket.send(
        JSON.stringify({
          userId: params.userId,
          pin: params.pin,
          idPin: params.idPin,
        }),
      );
    } else {
      console.error("Неправильный тип сообщения:(");
    }
  }
}
