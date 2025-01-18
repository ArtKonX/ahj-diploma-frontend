export default function getCurrentTab() {
  if (!JSON.parse(localStorage.getItem("currentTab"))) {
    localStorage.setItem(
      "currentTab",
      JSON.stringify({ currentTab: "allMessages" }),
    );
    return JSON.parse(localStorage.getItem("currentTab")).currentTab;
  } else {
    return JSON.parse(localStorage.getItem("currentTab")).currentTab;
  }
}
