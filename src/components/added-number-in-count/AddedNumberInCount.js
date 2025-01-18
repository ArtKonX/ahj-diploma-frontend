export default class AddedNumberInCount {
  constructor(listCounts, nameCount) {
    this.listCounts = listCounts;
    this.nameCount = nameCount;
  }

  addNumberInCount() {
    this.listCounts.forEach((count) => {
      if (count.textContent == this.nameCount) {
        count.nextElementSibling.textContent++;
      }

      if (
        count.textContent != "Избранное" &&
        count.textContent == "Все сообщения"
      ) {
        count.nextElementSibling.textContent++;
      }
    });
  }
}
