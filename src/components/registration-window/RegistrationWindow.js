import Button from "../ui/Button/Button";
import Div from "../ui/Div/Div";
import Form from "../ui/Form/Form";
import Input from "../ui/Input/Input";
import Label from "../ui/Label/Label";

import ChatAPI from "../../js/api/ChatAPI";
import Heading from "../ui/Heading/Heading";
import SignInWindow from "../sign-in-window/SignInWindow";
import validatorForm from "../../utils/validatorForm";
import WidgetTooltip from "../widget-tooltip/WidgetTooltip";

export default class RegistrationWindow {
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
      text: "Регистрация аккаунта:",
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

    this.userInfoNameContainer = new Div({
      class: "user-info-container",
    }).element;
    this.userInfoNameLabel = new Label({
      class: "label-user-info",
      for: "input-name",
      text: "Имя:",
    }).element;
    this.userInfoNameInput = new Input({
      class: "input-user-info",
      type: "text",
      id: "input-name",
      name: "name",
      placeholder: "Введите имя...",
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

    this.buttonRegister = new Button({
      class: "button-register",
      text: "Зарегистрироваться;)",
      type: "submit",
    }).element;
    this.buttonGoToSignIn = new Button({
      class: "button-go-to-sign-in",
      text: "Перейти на вход в аккаунт",
      type: "button",
    }).element;

    this.formBtnsContainer.append(this.buttonGoToSignIn, this.buttonRegister);

    this.parentEl.appendChild(this.formContainer);

    this.formContainer.append(this.formTitle, this.formRegister);
    this.formRegister.append(
      this.userInfoEmailContainer,
      this.userInfoNameContainer,
      this.userInfoPasswordContainer,
      this.formBtnsContainer,
    );

    this.userInfoEmailContainer.append(
      this.userInfoEmailLabel,
      this.userInfoEmailInput,
    );
    this.userInfoNameContainer.append(
      this.userInfoNameLabel,
      this.userInfoNameInput,
    );
    this.userInfoPasswordContainer.append(
      this.userInfoPasswordLabel,
      this.userInfoPasswordInput,
    );

    this.registerEvents();
    this.loader.remove();
  }

  registerEvents() {
    this.formRegister.addEventListener("submit", this.onСreateUser.bind(this));
    this.buttonGoToSignIn.addEventListener("click", this.goToSignIn.bind(this));
  }

  goToSignIn() {
    this.parentEl.innerHTML = "";

    const signWindowWindow = new SignInWindow(
      this.parentEl,
      this.stateApp,
      this.fullApp,
      this.loader,
    );

    signWindowWindow.bindToDOM();
  }

  onСreateUser(e) {
    e.preventDefault();

    const formData = new FormData(this.formRegister);

    const validEmail = validatorForm(
      "email",
      Object.fromEntries(formData).email,
    );
    const validPassword = validatorForm(
      "password",
      Object.fromEntries(formData).password,
    );

    if (validEmail.valid && validPassword.valid) {
      if (
        Object.fromEntries(formData).email &&
        Object.fromEntries(formData).password &&
        Object.fromEntries(formData).name
      ) {
        this.api.createUser(Object.fromEntries(formData), (data) => {
          if (data.status == "error") {
            console.error(data.message);
          } else if (data.status === "ok") {
            this.stateApp.save(data.user);

            this.formRegister.reset();
            this.formContainer.remove();
            document.querySelector(".container").remove();
            this.fullApp.init();
          }
        });
      } else {
        console.error("Вы не ввели email или password или name(");
      }
    } else {
      if (validEmail.valid == false) {
        const widgetTooltip = new WidgetTooltip(
          e.target.querySelector("#input-email"),
        );
        widgetTooltip.actionTooltip(validEmail.message);
      }
      if (validEmail.valid == false) {
        const widgetTooltip = new WidgetTooltip(
          e.target.querySelector("#input-password"),
        );
        widgetTooltip.actionTooltip(validPassword.message);
      }
    }
  }
}
