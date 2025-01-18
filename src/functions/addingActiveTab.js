export default function addingActiveTab(tabName, e) {
  if (e.target.closest("." + tabName)) {
    [...document.querySelectorAll("." + tabName)].forEach((elem) => {
      elem.classList.remove(`${tabName}_active`);
    });

    e.target.closest("." + tabName).classList.add(`${tabName}_active`);

    const activeTabName = e.target.closest(".file-name-info-element_active").id;

    localStorage.setItem(
      "currentTab",
      JSON.stringify({ currentTab: activeTabName }),
    );
  }
}
