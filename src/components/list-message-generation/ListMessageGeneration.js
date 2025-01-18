import Loader from "../ui/Loader/Loader";

export default class ListMessageGeneration {
  constructor(
    api,
    valuesForGeneration,
    alreadyMessages,
    listDifferentTypesMessages,
    parentEl,
  ) {
    this.api = api;
    this.valuesForGeneration = valuesForGeneration;
    this.alreadyMessages = alreadyMessages;
    this.listDifferentTypesMessages = listDifferentTypesMessages;
    this.parentEl = parentEl;
  }

  bindToDOM() {
    this.body = document.querySelector("body");

    this.loader = new Loader({ class: "loader" }).element;
    this.body.appendChild(this.loader);

    this.api.messages(
      (messages) => {
        if (messages.messages.length == 0) {
          this.loader.remove();
        }

        if (messages.status == "ok") {
          console.log(messages.message);

          this.loader.remove();

          if (messages.messages) {
            messages.messages.forEach((message) => {
              if (!message.messageBot) {
                if (this.alreadyMessages?.includes(message?.id)) {
                  console.log("Этот элемент уже добален");
                  this.valuesForGeneration.count++;
                }

                if (message?.type == "link") {
                  const linkMessage =
                    new this.listDifferentTypesMessages.linkMessage(
                      this.parentEl,
                      message,
                    );
                  linkMessage.bindToDOM();
                } else if (message?.type == "different") {
                  const textMessage =
                    new this.listDifferentTypesMessages.textMessage(
                      this.parentEl,
                      message,
                    );
                  textMessage.bindToDOM();
                } else if (message?.type.includes("image")) {
                  const imageMessage =
                    new this.listDifferentTypesMessages.imageMessage(
                      this.parentEl,
                      message,
                    );

                  imageMessage.bindToDOM();
                } else if (message?.type.includes("video")) {
                  const videoMessage =
                    new this.listDifferentTypesMessages.videoMessage(
                      this.parentEl,
                      message,
                    );
                  videoMessage.bindToDOM();
                } else if (message?.type.includes("audio")) {
                  const audioMessage =
                    new this.listDifferentTypesMessages.audioMessage(
                      this.parentEl,
                      message,
                    );
                  audioMessage.bindToDOM();
                } else if (message?.type.includes("application")) {
                  const fileMessage =
                    new this.listDifferentTypesMessages.fileMessage(
                      this.parentEl,
                      message,
                      true,
                    );
                  fileMessage.bindToDOM();
                }
              } else {
                if (
                  this.alreadyMessages?.includes(message.messageUser?.id) ||
                  this.alreadyMessages?.includes(message.messageBot?.id)
                ) {
                  console.log("Этот элемент уже добален");
                  this.valuesForGeneration.count++;
                }

                if (message.messageUser?.type == "link") {
                  const linkMessage =
                    new this.listDifferentTypesMessages.linkMessage(
                      this.parentEl,
                      message.messageUser,
                    );
                  linkMessage.bindToDOM();
                } else if (message.messageUser?.type == "different") {
                  const textMessage =
                    new this.listDifferentTypesMessages.textMessage(
                      this.parentEl,
                      message.messageUser,
                    );
                  textMessage.bindToDOM();
                } else if (message.messageBot) {
                  const textMessage =
                    new this.listDifferentTypesMessages.textMessage(
                      this.parentEl,
                      message.messageBot,
                    );
                  textMessage.bindToDOM();
                }
              }
            });
          }
        } else {
          console.error(messages.message);
        }
      },
      this.valuesForGeneration.count,
      this.valuesForGeneration.page,
      this.valuesForGeneration.userId,
      this.valuesForGeneration.size,
      this.valuesForGeneration.category,
    );
  }
}
