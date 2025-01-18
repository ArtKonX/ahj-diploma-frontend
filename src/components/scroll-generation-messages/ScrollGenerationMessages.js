export default class ScrollGenerationMessages {
  constructor(
    scrollHeight,
    listMessageGeneration,
    api,
    valuesForGeneration,
    alreadyMessages,
    listDifferentTypesMessages,
    parentEl,
  ) {
    this.scrollHeight = scrollHeight;
    this.listMessageGeneration = listMessageGeneration;
    this.api = api;
    this.valuesForGeneration = valuesForGeneration;
    this.alreadyMessages = alreadyMessages;
    this.listDifferentTypesMessages = listDifferentTypesMessages;
    this.parentEl = parentEl;
    this.scrollListener = this.scrollListener.bind(this);
  }

  bindToDOM() {
    this.unblocking = false;

    window.addEventListener("scroll", this.scrollListener);
  }

  scrollListener() {
    if (
      window.innerHeight + window.pageYOffset + this.scrollHeight <
        document.documentElement.scrollHeight &&
      !this.unblocking
    ) {
      console.log("Прокрутка достигла начало страницы!");

      this.unblocking = true;

      this.valuesForGeneration.page += 1;

      setTimeout(() => {
        const listMessageGeneration = new this.listMessageGeneration(
          this.api,
          this.valuesForGeneration,
          this.alreadyMessages,
          this.listDifferentTypesMessages,
          this.parentEl,
        );

        listMessageGeneration.bindToDOM();

        this.unblocking = false;
      }, 0);
    }
  }

  removeScroll() {
    window.removeEventListener("scroll", this.scrollListener);
  }
}
