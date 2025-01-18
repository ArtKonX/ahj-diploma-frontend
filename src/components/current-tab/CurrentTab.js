export default class CurrentTab {
  constructor(
    scrollGenerationMessages,
    listMessageGeneration,
    currentContentContainer,
  ) {
    this.scrollGenerationMessagesData = scrollGenerationMessages;
    this.listMessageGenerationData = listMessageGeneration;
    this.currentContentContainer = currentContentContainer;
  }

  bindToDOM() {
    this.scrollGenerationMessagesData.loadContentContainer.innerHTML = "";
    this.currentContentContainer.innerHTML = "";

    if (this.scrollGenerationMessagesMain) {
      this.scrollGenerationMessagesMain.removeScroll();
    }

    this.scrollGenerationMessagesMain =
      new this.scrollGenerationMessagesData.scrollGenerationMessages(
        this.scrollGenerationMessagesData.heightScroll,
        this.scrollGenerationMessagesData.ListMessageGeneration,
        this.scrollGenerationMessagesData.api,
        this.scrollGenerationMessagesData.valuesForGeneration,
        this.scrollGenerationMessagesData.alreadyMessages,
        this.scrollGenerationMessagesData.listDifferentTypesMessages,
        this.scrollGenerationMessagesData.loadContentContainer,
      );
    this.scrollGenerationMessagesMain.bindToDOM();

    this.listMessageGenerationMain =
      new this.listMessageGenerationData.listMessageGeneration(
        this.listMessageGenerationData.api,
        this.listMessageGenerationData.valuesForGeneration,
        this.listMessageGenerationData.alreadyMessages,
        this.listMessageGenerationData.listDifferentTypesMessages,
        this.listMessageGenerationData.loadContentContainer,
      );
    this.listMessageGenerationMain.bindToDOM();
  }

  rewriteAlreadyMessages(alreadyMessages) {
    this.removeInstanceScrollGenerationMessagesMain();

    this.scrollGenerationMessagesMain =
      new this.scrollGenerationMessagesData.scrollGenerationMessages(
        this.scrollGenerationMessagesData.heightScroll,
        this.scrollGenerationMessagesData.ListMessageGeneration,
        this.scrollGenerationMessagesData.api,
        this.scrollGenerationMessagesData.valuesForGeneration,
        alreadyMessages,
        this.scrollGenerationMessagesData.listDifferentTypesMessages,
        this.scrollGenerationMessagesData.loadContentContainer,
      );
    this.scrollGenerationMessagesMain.bindToDOM();
  }

  removeInstanceScrollGenerationMessagesMain() {
    if (this.scrollGenerationMessagesMain) {
      this.scrollGenerationMessagesMain.removeScroll();
    }
  }
}
