import Button from "../ui/Button/Button";
import Div from "../ui/Div/Div";
import Form from "../ui/Form/Form";
import Heading from "../ui/Heading/Heading";
import Input from "../ui/Input/Input";
import Label from "../ui/Label/Label";
import ChatAPI from "../../js/api/ChatAPI";
import RegistrationWindow from "../registration-window/RegistrationWindow";
import WidgetTooltip from "../widget-tooltip/WidgetTooltip";

export default class SignInWindow {
  constructor(parentEl, stateApp, fullApp, loader, url) {
    this.parentEl = parentEl;
    this.stateApp = stateApp;
    this.fullApp = fullApp;
    this.loader = loader;
    this.url = url;
    this.api = new ChatAPI(this.url);
  }

  bindToDOM() {
    this.formContainer = new Div({ class: "form-container" }).element;

    this.formTitle = new Heading({
      class: "form-title",
      level: 1,
      text: "Войдите в аккаунт:",
    }).element;

    this.formRegister = new Form({ class: "form-register-or-sign-in" }).element;

    this.userInfoEmailContainer = new Div({
      class: "user-info-container",
    }).element;
    this.userInfoEmailLabel = new Label({
      class: "label-user-info",
      for: "input-email",
      text: "Почтовый адрес:",
    }).element;
    this.userInfoEmailInput = new Input({
      class: "input-user-info",
      type: "email",
      id: "input-email",
      name: "email",
      placeholder: "Введите почтовый адрес...",
      required: true,
    }).element;

    this.userInfoPasswordContainer = new Div({
      class: "user-info-container",
    }).element;
    this.userInfoPasswordLabel = new Label({
      class: "label-user-info",
      for: "input-password",
      text: "Пароль:",
    }).element;
    this.userInfoPasswordInput = new Input({
      class: "input-user-info",
      type: "password",
      id: "input-password",
      name: "password",
      placeholder: "Введите пароль...",
      required: true,
    }).element;

    this.formBtnsContainer = new Div({ class: "form-btns-container" }).element;

    this.buttonSignIn = new Button({
      class: "button-sign-in",
      text: "Войти;)",
      type: "submit",
    }).element;

    this.buttonGoToRegistration = new Button({
      class: "button-go-to-registration",
      text: "Перейти на регистрацию",
      type: "button",
    }).element;

    this.formBtnsContainer.append(
      this.buttonGoToRegistration,
      this.buttonSignIn,
    );

    this.parentEl.appendChild(this.formContainer);
    this.formContainer.append(this.formTitle, this.formRegister);
    this.formRegister.append(
      this.userInfoEmailContainer,
      this.userInfoPasswordContainer,
      this.formBtnsContainer,
    );

    this.userInfoEmailContainer.append(
      this.userInfoEmailLabel,
      this.userInfoEmailInput,
    );
    this.userInfoPasswordContainer.append(
      this.userInfoPasswordLabel,
      this.userInfoPasswordInput,
    );

    this.registerEvents();

    this.loader.remove();
  }

  registerEvents() {
    this.formRegister.addEventListener("submit", this.onSignIn.bind(this));
    this.buttonGoToRegistration.addEventListener(
      "click",
      this.goToRegistration.bind(this),
    );
  }

  goToRegistration() {
    this.parentEl.innerHTML = "";

    const registrationWindow = new RegistrationWindow(
      this.parentEl,
      this.stateApp,
      this.fullApp,
      this.loader,
      this.url,
    );
    registrationWindow.bindToDOM();
  }

  onSignIn(e) {
    e.preventDefault();

    const formData = new FormData(this.formRegister);

    this.api.authorizationUser(Object.fromEntries(formData), (data) => {
      console.log(data);
      if (data.status == "error") {
        console.error(data.message);

        const widgetTooltip = new WidgetTooltip(
          e.target.querySelector("#input-email"),
        );
        widgetTooltip.actionTooltip(data.message);
      } else if (data.status == "ok") {
        console.log(data.message);
        this.stateApp.save(data.user);

        this.formRegister.reset();
        this.formContainer.remove();
        document.querySelector(".container").remove();
        this.fullApp.init();
      }
    });
  }
}
