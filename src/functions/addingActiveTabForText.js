export default function addingActiveTabForText(tabName, tabText) {
  [...document.querySelectorAll("." + tabName)].forEach((elem) => {
    if (elem.id == tabText) elem.classList.add(`${tabName}_active`);
  });
}
