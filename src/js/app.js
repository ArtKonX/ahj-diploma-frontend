import SignInWindow from "../components/sign-in-window/SignInWindow";
import Div from "../components/ui/Div/Div";
import API_ROOT from "../environment/environment";
import StateApp from "../classes/StateApp";
import FullApp from "../components/full-app/FullApp";

import listNamesTypesMessages from "../data/listNamesTypesMessages.json";
import Loader from "../components/ui/Loader/Loader";

const url = `${API_ROOT}`;

const loader = new Loader({ class: "loader" }).element;
const body = document.querySelector("body");
body.appendChild(loader);

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");

  const container = new Div({ class: "container" }).element;
  app.appendChild(container);

  const stateApp = new StateApp();

  const fullApp = new FullApp(
    url,
    app,
    stateApp,
    listNamesTypesMessages,
    loader,
  );

  if (!stateApp.load()) {
    const registrationWindow = new SignInWindow(
      container,
      stateApp,
      fullApp,
      loader,
      url,
    );
    registrationWindow.bindToDOM();
  } else {
    container.remove();
    fullApp.init();
  }
});
