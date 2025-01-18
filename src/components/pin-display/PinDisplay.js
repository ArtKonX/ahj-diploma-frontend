export default class PinDisplay {
  constructor(parentEl, api, pinMessagesClasses, stateApp) {
    this.parentEl = parentEl;
    this.api = api;
    this.pinMessagesClasses = pinMessagesClasses;
    this.stateApp = stateApp;
    this.userId = this.stateApp.load().id;
  }

  bindToDOM() {
    this.api.getPin(this.userId, (data) => {
      if (data.status == "ok") {
        console.log(data.message);
        if (data.pin.type) {
          if (data.pin.type == "link" || data.pin.type == "different") {
            const pinMessage = new this.pinMessagesClasses.pinMessage(
              this.parentEl,
              data.pin,
            );
            pinMessage.bindToDOM();
          } else if (
            data.pin.type.includes("image") ||
            data.pin.type.includes("video") ||
            data.pin.type.includes("audio")
          ) {
            const pinFile = new this.pinMessagesClasses.pinFile(
              this.parentEl,
              data.pin,
            );
            pinFile.bindToDOM();
          } else if (data.pin.type.includes("application")) {
            const pinFile = new this.pinMessagesClasses.pinFile(
              this.parentEl,
              data.pin,
            );
            pinFile.bindToDOM();
          }
        }
        if (
          document.querySelector(".content-container") &&
          document.querySelector(".pin-message-container")
        ) {
          document.querySelector(".content-container").style.marginTop =
            document.querySelector(".pin-message-container").clientHeight +
            20 +
            "px";
          document.querySelector(".content-container").style.maxHeight =
            `calc(94.8% - ${document.querySelector(".pin-message-container").clientHeight}px)`;
        }
      } else {
        console.error(data.message);
        if (document.querySelector(".content-container")) {
          document.querySelector(".content-container").style.marginTop =
            10 + "px";
          document.querySelector(".content-container").style.maxHeight =
            `94.8%`;
        }
      }
    });
  }
}
