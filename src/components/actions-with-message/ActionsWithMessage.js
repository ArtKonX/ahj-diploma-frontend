import Button from "../ui/Button/Button";

export default class ActionsWithMessage {
  constructor(
    parentEl,
    btnsClasses,
    pinMessageContainerClass,
    api,
    pinClasses,
    messagesClasses,
    messageContainerClass,
    fileNameTextBtn,
    mainWebsocket,
    actionFavContainerClass,
    stateApp,
  ) {
    this.parentEl = parentEl;
    this.btnsClasses = btnsClasses;
    this.pinMessageContainerClass = pinMessageContainerClass;
    this.api = api;
    this.pinClasses = pinClasses;
    this.messagesClasses = messagesClasses;
    this.messageContainerClass = messageContainerClass;
    this.fileNameTextBtn = fileNameTextBtn;
    this.mainWebsocket = mainWebsocket;
    this.actionFavContainerClass = actionFavContainerClass;
    this.stateApp = stateApp;
    this.userId = this.stateApp.load().id;
  }

  subscribeToEvents() {
    this.parentEl.addEventListener(
      "click",
      this.actionsWithMessageEvents.bind(this),
    );
  }

  actionsWithMessageEvents(e) {
    if (e.target.closest("." + this.btnsClasses.pinActive)) {
      this.delatePin(e);
    } else if (e.target.closest("." + this.btnsClasses.pin)) {
      this.addPin(e);
    } else if (e.target.closest("." + this.btnsClasses.favAdd)) {
      this.addInFavourites(e);
    } else if (e.target.closest("." + this.btnsClasses.favDel)) {
      this.delateFavourites(e);
    }

    this.eventByDownloadFile(e);
  }

  eventByDownloadFile(e) {
    if (e.target.closest(".pin-message-all")) {
      const pinMessageContainer = e.target
        .closest(".pin-message-all")
        .querySelector(".pin-message");

      const id = pinMessageContainer.id;

      if (e.target.closest("." + this.btnsClasses.btnDownload)) {
        e.target
          .closest("." + this.btnsClasses.btnDownload)
          .addEventListener("click", () =>
            this.downloadFileById(id, this.userId),
          );
      }
    }

    if (e.target.closest("." + this.messageContainerClass)) {
      const messageContainer = e.target.closest(
        "." + this.messageContainerClass,
      );

      if (e.target.closest("." + this.btnsClasses.btnDownload)) {
        if (
          messageContainer.querySelector("." + this.messagesClasses.imgFile)
        ) {
          const id = messageContainer.querySelector(
            "." + this.messagesClasses.imgFile,
          ).id;

          e.target
            .closest("." + this.btnsClasses.btnDownload)
            .addEventListener("click", () =>
              this.downloadFileById(id, this.userId),
            );
        } else if (
          messageContainer.querySelector("." + this.messagesClasses.videoFile)
        ) {
          const id = messageContainer.querySelector(
            "." + this.messagesClasses.videoFile,
          ).id;

          e.target
            .closest("." + this.btnsClasses.btnDownload)
            .addEventListener("click", () =>
              this.downloadFileById(id, this.userId),
            );
        } else if (
          messageContainer.querySelector("." + this.messagesClasses.audioFile)
        ) {
          const id = messageContainer.querySelector(
            "." + this.messagesClasses.audioFile,
          ).id;

          e.target
            .closest("." + this.btnsClasses.btnDownload)
            .addEventListener("click", () =>
              this.downloadFileById(id, this.userId),
            );
        }
      }
    }
  }

  delatePin(e) {
    if (document.querySelector("." + this.btnsClasses.pinActive)) {
      document
        .querySelector("." + this.btnsClasses.pinActive)
        .classList.remove(this.btnsClasses.pinActive);
    }

    if (document.querySelector("." + this.pinMessageContainerClass))
      document.querySelector("." + this.pinMessageContainerClass).remove();

    const messageContainer = e.target.closest("." + this.messageContainerClass);

    let id;

    if (e.target.closest(".pin-message-all")) {
      const pinMessageContainer = e.target
        .closest(".pin-message-all")
        .querySelector(".pin-message");

      id = pinMessageContainer.id;
    }

    if (messageContainer) {
      if (
        messageContainer.querySelector("." + this.messagesClasses.videoFile)
      ) {
        id = messageContainer.querySelector(
          "." + this.messagesClasses.videoFile,
        ).id;
      } else if (
        messageContainer.querySelector("." + this.messagesClasses.audioFile)
      ) {
        id = messageContainer.querySelector(
          "." + this.messagesClasses.audioFile,
        ).id;
      } else if (
        messageContainer.querySelector("." + this.messagesClasses.imgFile)
      ) {
        id = messageContainer.querySelector(
          "." + this.messagesClasses.imgFile,
        ).id;
      } else if (
        messageContainer.querySelector(
          "." + this.messagesClasses.messageFileLink,
        )
      ) {
        id = messageContainer.querySelector(
          "." + this.messagesClasses.messageFileLink,
        ).id;
      } else if (
        messageContainer.querySelector("." + this.messagesClasses.message)
      ) {
        id = messageContainer.querySelector(
          "." + this.messagesClasses.message,
        ).id;
      } else if (
        messageContainer.querySelector("." + this.messagesClasses.messageLink)
      ) {
        id = messageContainer.querySelector(
          "." + this.messagesClasses.messageLink,
        ).id;
      }
    }

    this.api.delatePin({ id, userId: this.userId }, (data) => {
      if (data.status == "ok") {
        console.log(data.message);
        this.mainWebsocket.sendInWebsocket("pin", {
          userId: this.userId,
          pin: false,
          idPin:
            "id" +
            e.target
              .closest("." + this.btnsClasses.pin)
              .nextElementSibling.id.replaceAll("-", ""),
        });
        document.querySelector(".content-container").style.marginTop =
          10 + "px";
      } else {
        console.error(data.message);
      }
    });
  }

  addPin(e) {
    if (document.querySelector("." + this.btnsClasses.pinActive)) {
      document
        .querySelector("." + this.btnsClasses.pinActive)
        .classList.remove(this.btnsClasses.pinActive);
    }

    if (document.querySelector("." + this.pinMessageContainerClass))
      document.querySelector("." + this.pinMessageContainerClass).remove();

    const messageContainer = e.target.closest("." + this.messageContainerClass);

    let id;

    if (messageContainer.querySelector("." + this.messagesClasses.videoFile)) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.videoFile,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.audioFile)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.audioFile,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.imgFile)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.imgFile,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.messageFileLink)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.messageFileLink,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.message)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.message,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.messageLink)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.messageLink,
      ).id;
    }

    this.api.addPin({ id, userId: this.userId }, (data) => {
      if (data.status == "ok") {
        console.log(data.message);

        e.target
          .closest("." + this.btnsClasses.pin)
          .classList.add(this.btnsClasses.pinActive);

        const btnPin = new Button({
          class: [this.btnsClasses.pin, this.btnsClasses.pinActive],
          text: "📌",
          type: "button",
        }).element;

        this.mainWebsocket.sendInWebsocket("pin", {
          userId: this.userId,
          pin: true,
          idPin: `id${id.replaceAll("-", "")}`,
        });

        if (data.pin.pin === true) {
          btnPin.classList.add(this.btnsClasses.pinActive);
        }

        if (data.pin.type == "link" || data.pin.type == "different") {
          const pinMessage = new this.pinClasses.pinMessage(
            this.parentEl,
            data.pin,
          );
          pinMessage.bindToDOM();
        } else if (
          data.pin.type.includes("image") ||
          data.pin.type.includes("video") ||
          data.pin.type.includes("audio")
        ) {
          const pinFile = new this.pinClasses.pinFile(this.parentEl, data.pin);
          pinFile.bindToDOM();
        } else {
          const pinFile = new this.pinClasses.pinFile(this.parentEl, data.pin);
          pinFile.bindToDOM();
        }

        document.querySelector(".content-container").style.marginTop =
          document.querySelector(".pin-message-container").clientHeight +
          20 +
          "px";
      } else {
        document.querySelector(".content-container").style.maxHeight = `94.8%`;
        console.error(data.message);
      }
    });
  }

  addInFavourites(e) {
    const messageContainer = e.target.closest("." + this.messageContainerClass);

    let id;

    if (messageContainer.querySelector("." + this.messagesClasses.videoFile)) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.videoFile,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.audioFile)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.audioFile,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.imgFile)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.imgFile,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.messageFileLink)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.messageFileLink,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.message)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.message,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.messageLink)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.messageLink,
      ).id;
    }

    this.api.addFavourites({ id, userId: this.userId }, (data) => {
      if (data.status == "ok") {
        console.log(data.message);

        const favouritesElem = [
          ...document.querySelectorAll("." + this.fileNameTextBtn),
        ].find((el) => el.textContent == "Избранное");

        favouritesElem.nextElementSibling.textContent++;

        this.mainWebsocket.sendInWebsocket("count", {
          userId: this.userId,
          count: favouritesElem.nextElementSibling.textContent,
          nameCount: favouritesElem.textContent,
        });
      } else {
        console.error(data.message);
      }
    });
  }

  delateFavourites(e) {
    const messageContainer = e.target.closest("." + this.messageContainerClass);

    let id;

    if (messageContainer.querySelector("." + this.messagesClasses.videoFile)) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.videoFile,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.audioFile)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.audioFile,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.imgFile)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.imgFile,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.messageFileLink)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.messageFileLink,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.message)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.message,
      ).id;
    } else if (
      messageContainer.querySelector("." + this.messagesClasses.messageLink)
    ) {
      id = messageContainer.querySelector(
        "." + this.messagesClasses.messageLink,
      ).id;
    }

    this.api.delateFavourites({ id, userId: this.userId }, (data) => {
      if (data.status == "ok") {
        console.log(data.message);
        const favouritesElem = [
          ...document.querySelectorAll("." + this.fileNameTextBtn),
        ].find((el) => el.textContent == "Избранное");

        favouritesElem.nextElementSibling.textContent--;
        this.mainWebsocket.sendInWebsocket("count", {
          userId: this.userId,
          count: favouritesElem.nextElementSibling.textContent,
          nameCount: favouritesElem.textContent,
        });
      } else {
        console.error(data.message);
      }
    });
  }

  downloadFileById(id, userId) {
    this.api.downloadFileById(id, userId, (blob) => {
      if (blob) {
        const filePath = `downloaded-file-${id}`;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = filePath;
        a.click();

        console.log("Successful file download with id: " + id);
      }
    });
  }
}
