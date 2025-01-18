import Li from "../ui/Li/Li";
import Ul from "../ui/Ul/Ul";
import Button from "../ui/Button/Button";
import Span from "../ui/Span/Span";

import addingActiveTab from "../../functions/addingActiveTab";
import CurrentTab from "../current-tab/CurrentTab";
import ScrollGenerationMessages from "../scroll-generation-messages/ScrollGenerationMessages";
import ListMessageGeneration from "../list-message-generation/ListMessageGeneration";

import LinkMessage from "../link-message/LinkMessage";
import TextMessage from "../text-message/TextMessage";
import ImageMessage from "../image-message/ImageMessage";
import VideoMessage from "../video-message/VideoMessage";
import AudioMessage from "../audio-message/AudioMessage";
import FileMessage from "../file-message/FileMessage";

export default class ListMediaFiles {
  constructor(
    parentEl,
    api,
    data,
    fileNameInfoName,
    loadContentContainer,
    currentContentContainer,
    stateApp,
  ) {
    this.parentEl = parentEl;

    this.api = api;

    if (Array.isArray(data)) {
      this._data = data;
    } else {
      throw new Error(
        "Список названий медиафайлов и количества их должен быть массивом(",
      );
    }

    this.fileNameInfoName = fileNameInfoName;
    this.loadContentContainer = loadContentContainer;
    this.currentContentContainer = currentContentContainer;
    this.stateApp = stateApp;

    this.userId = this.stateApp.load().id;
  }

  get data() {
    return this._data;
  }

  bindToDOM(sendMessageContainer) {
    this.sendMessageContainer = sendMessageContainer;

    this.listHistoryFiles = new Ul({ class: "list-history-files" }).element;

    this.data.forEach((mediaFilesNames) => {
      const li = new Li({
        class: "file-name-info-element",
        id: mediaFilesNames.nameEng,
      }).element;
      const fileNameTextBtn = new Button({
        class: "file-name-text-btn",
        text: mediaFilesNames.nameRus,
        type: "button",
      }).element;
      const fileNameCount = new Span({ class: "file-name-count", text: 0 })
        .element;

      this.api.getCatagories(
        mediaFilesNames.nameEng,
        this.userId,
        (catagory) => {
          if (catagory.status == "ok") {
            console.log(catagory.message);
            fileNameCount.textContent = catagory.catagory.length;
          } else {
            fileNameCount.textContent = 0;
            console.log(catagory.message);
          }
        },
      );

      li.append(fileNameTextBtn, fileNameCount);
      this.listHistoryFiles.appendChild(li);
    });

    this.parentEl.appendChild(this.listHistoryFiles);

    this.listHistoryFiles.addEventListener("click", this.goingPage.bind(this));
  }

  goingPage(e) {
    if (e.target.closest("." + this.fileNameInfoName)) {
      addingActiveTab(this.fileNameInfoName, e);
      this.checkMainTab();
    }
  }

  checkMainTab() {
    this.currentTab = JSON.parse(localStorage.getItem("currentTab")).currentTab;

    if (
      this.listHistoryFiles.querySelector(
        "." + this.fileNameInfoName + "_active",
      )
    ) {
      const nameActiveTag = this.listHistoryFiles
        .querySelector("." + this.fileNameInfoName + "_active")
        .querySelector(".file-name-text-btn").textContent;

      this.count = 0;
      let size = 10;
      let page = 1;

      if (this.currentTabClass) {
        this.currentTabClass.removeInstanceScrollGenerationMessagesMain();
      }

      this.currentTabClass = new CurrentTab(
        {
          scrollGenerationMessages: ScrollGenerationMessages,
          heightScroll: 20,
          ListMessageGeneration,
          api: this.api,
          valuesForGeneration: {
            count: this.count,
            page: page,
            size: size,
            category: this.currentTab,
            userId: this.userId,
          },
          alreadyMessages: this.alreadyMessages,
          listDifferentTypesMessages: {
            linkMessage: LinkMessage,
            textMessage: TextMessage,
            imageMessage: ImageMessage,
            videoMessage: VideoMessage,
            audioMessage: AudioMessage,
            fileMessage: FileMessage,
          },
          loadContentContainer: this.loadContentContainer,
        },
        {
          listMessageGeneration: ListMessageGeneration,
          api: this.api,
          valuesForGeneration: {
            count: this.count,
            page: page,
            size: size,
            category: this.currentTab,
            userId: this.userId,
          },
          alreadyMessages: this.alreadyMessages,
          listDifferentTypesMessages: {
            linkMessage: LinkMessage,
            textMessage: TextMessage,
            imageMessage: ImageMessage,
            videoMessage: VideoMessage,
            audioMessage: AudioMessage,
            fileMessage: FileMessage,
          },
          loadContentContainer: this.loadContentContainer,
        },
        this.currentContentContainer,
      );

      this.currentTabClass.bindToDOM();

      if (nameActiveTag == "Избранное") {
        this.sendMessageContainer.classList.add(
          "send-message-container_hidden",
        );
      } else if (nameActiveTag == "Ссылки") {
        this.sendMessageContainer.classList.add(
          "send-message-container_hidden",
        );
      } else if (nameActiveTag == "Изображения") {
        this.sendMessageContainer.classList.add(
          "send-message-container_hidden",
        );
      } else if (nameActiveTag == "Видео") {
        this.sendMessageContainer.classList.add(
          "send-message-container_hidden",
        );
      } else if (nameActiveTag == "Аудио") {
        this.sendMessageContainer.classList.add(
          "send-message-container_hidden",
        );
      } else if (nameActiveTag == "Файлы") {
        this.sendMessageContainer.classList.add(
          "send-message-container_hidden",
        );
      } else if (nameActiveTag == "Все сообщения") {
        this.sendMessageContainer.classList.remove(
          "send-message-container_hidden",
        );
      }
    }
  }

  rewriteAlreadyMessagesInCurrentTab(alreadyMessages) {
    if (this.currentTabClass) {
      this.currentTabClass.rewriteAlreadyMessages(alreadyMessages);
    }
  }
}
