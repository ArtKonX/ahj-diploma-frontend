import ListMediaFiles from "../list-mediafiles/ListMediafiles";
import Div from "../ui/Div/Div";
import Heading from "../ui/Heading/Heading";

export default class HistoryNamesFiles {
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
      this.data = data;
    } else {
      throw new Error(
        "Список названий медиафайлов и количества их должен быть массивом(",
      );
    }

    this.fileNameInfoName = fileNameInfoName;
    this.loadContentContainer = loadContentContainer;
    this.currentContentContainer = currentContentContainer;

    this.stateApp = stateApp;
  }

  bindToDOM() {
    this.historyFilesContainer = new Div({
      class: "history-files-container",
    }).element;
    this.titleHistoryFiles = new Heading({
      class: "title-history-files",
      text: "Медиафайлы",
      level: 2,
    }).element;

    this.historyFilesContainer.appendChild(this.titleHistoryFiles);
    this.parentEl.appendChild(this.historyFilesContainer);

    this.listMediaFiles = new ListMediaFiles(
      this.historyFilesContainer,
      this.api,
      this.data,
      this.fileNameInfoName,
      this.loadContentContainer,
      this.currentContentContainer,
      this.stateApp,
    );
  }

  getListMediaFiles() {
    if (this.listMediaFiles) return this.listMediaFiles;
  }

  bindToDOMListMediaFiles(sendMessageContainer) {
    this.listMediaFiles.bindToDOM(sendMessageContainer);
  }
}
