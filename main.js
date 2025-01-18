/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

// NAMESPACE OBJECT: ./node_modules/axios/lib/platform/common/utils.js
var common_utils_namespaceObject = {};
__webpack_require__.r(common_utils_namespaceObject);
__webpack_require__.d(common_utils_namespaceObject, {
  hasBrowserEnv: () => (hasBrowserEnv),
  hasStandardBrowserEnv: () => (hasStandardBrowserEnv),
  hasStandardBrowserWebWorkerEnv: () => (hasStandardBrowserWebWorkerEnv),
  navigator: () => (_navigator),
  origin: () => (origin)
});

;// ./src/components/ui/Button/Button.js

class Button {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const btn = document.createElement("button");
    !Array.isArray(this.params.class) ? btn.classList.add(this.params.class) : btn.classList.add(...this.params.class);
    btn.innerHTML = this.params.text;
    btn.type = this.params.type;
    if (this.params.id) btn.id = this.params.id;
    return btn;
  }
}
;// ./src/components/ui/Div/Div.js

class Div {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const div = document.createElement("div");
    !Array.isArray(this.params.class) ? div.classList.add(this.params.class) : div.classList.add(...this.params.class);
    if (this.params.id) div.id = this.params.id;
    return div;
  }
}
;// ./src/components/ui/Form/Form.js

class Form {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const form = document.createElement("form");
    !Array.isArray(this.params.class) ? form.classList.add(this.params.class) : form.classList.add(...this.params.class);
    return form;
  }
}
;// ./src/components/ui/Heading/Heading.js

class Heading {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const heading = document.createElement(`h${this.getLevel()}`);
    heading.classList.add(this.params.class);
    heading.textContent = this.params.text;
    return heading;
  }
  getLevel() {
    if (this.params.level in [1, 2, 3, 4, 5, 6]) return this.params.level;
    throw new Error("Вы указали не число или число не входящее в промежутке от 1 до 6");
  }
}
;// ./src/components/ui/Input/Input.js

class Input {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const input = document.createElement("input");
    input.classList.add(this.params.class);
    input.type = this.params.type;
    if (this.params.id) input.id = this.params.id;
    if (this.params.name) input.name = this.params.name;
    if (this.params.placeholder) input.placeholder = this.params.placeholder;
    if (this.params.required) input.required = this.params.required;
    return input;
  }
}
;// ./src/components/ui/Label/Label.js

class Label {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const label = document.createElement("label");
    label.classList.add(this.params.class);
    if (this.params.for) label.htmlFor = this.params.for;
    if (this.params.text) label.textContent = this.params.text;
    return label;
  }
}
;// ./src/js/api/createRequest.js
const createRequest = async options => {
  const reqSettings = {
    headers: {
      "Content-Type": "application/json"
    },
    method: options.method,
    body: JSON.stringify(options.body)
  };
  const response = await fetch(options.url, reqSettings);
  options.callback(await response.json());
};
/* harmony default export */ const api_createRequest = (createRequest);
;// ./src/js/api/downloadFileRequest.js
const downloadFileRequest = async options => {
  const response = await fetch(options.url);
  options.callback(await response.blob());
};
/* harmony default export */ const api_downloadFileRequest = (downloadFileRequest);
;// ./src/js/api/createRequestSendFiles.js
const createRequestSendFiles = async options => {
  const reqSettings = {
    method: options.method,
    body: options.body
  };
  const response = await fetch(options.url, reqSettings);
  options.callback(await response.json());
};
/* harmony default export */ const api_createRequestSendFiles = (createRequestSendFiles);
;// ./src/js/api/Entity.js



class Entity {
  constructor(url) {
    this.url = url;
  }
  createMess(data, callback) {
    api_createRequest({
      method: "POST",
      url: `${this.url}create-message`,
      body: data,
      callback
    });
  }
  getMessages(callback, count, page, userId, size, category) {
    console.log(`${this.url}messages/${count}?page=${page}&userId=${userId}&size=${size}&catagorie=` + category);
    api_createRequest({
      method: "GET",
      url: `${this.url}messages/${count}?page=${page}&userId=${userId}&size=${size}&catagorie=` + category,
      callback
    });
  }
  downloadFile(id, userId, callback) {
    api_downloadFileRequest({
      method: "POST",
      url: `${this.url}download-file/${id}?userId=${userId}`,
      callback
    });
  }
  addPin(data, callback) {
    api_createRequest({
      method: "POST",
      url: `${this.url}add-pin`,
      body: data,
      callback
    });
  }
  delateCurrentPin(data, callback) {
    api_createRequest({
      method: "POST",
      url: `${this.url}delate-pin`,
      body: data,
      callback
    });
  }
  getCurrentPin(userId, callback) {
    api_createRequest({
      method: "GET",
      url: `${this.url}get-pin/?userId=${userId}`,
      callback
    });
  }
  addCurrentFavourites(data, callback) {
    api_createRequest({
      method: "POST",
      url: `${this.url}add-favourites`,
      body: data,
      callback
    });
  }
  delateCurrentFavourites(data, callback) {
    api_createRequest({
      method: "POST",
      url: `${this.url}delate-favourites`,
      body: data,
      callback
    });
  }
  getCatagories(catagory, userId, callback) {
    api_createRequest({
      method: "GET",
      url: `${this.url}get-catagories/?categoryCurrent=${catagory}&userId=${userId}`,
      callback
    });
  }
  create(data, callback) {
    api_createRequest({
      method: "POST",
      url: `${this.url}register`,
      body: data,
      callback
    });
  }
  authorization(data, callback) {
    api_createRequest({
      method: "POST",
      url: `${this.url}authorization`,
      body: data,
      callback
    });
  }
  exit(data, callback) {
    api_createRequest({
      method: "POST",
      url: `${this.url}exit`,
      body: data,
      callback
    });
  }
  sendFile(data, callback) {
    api_createRequestSendFiles({
      method: "POST",
      url: `${this.url}send-file`,
      body: data,
      callback
    });
  }
}
;// ./src/js/api/ChatAPI.js

class ChatAPI extends Entity {
  createUser(name, callback) {
    this.create(name, callback);
  }
  createMessage(mess, callback) {
    this.createMess(mess, callback);
  }
  messages(callback, count, page, userId, size, category) {
    this.getMessages(callback, count, page, userId, size, category);
  }
  sendFiles(name, callback) {
    this.sendFile(name, callback);
  }
  getPin(userId, callback) {
    this.getCurrentPin(userId, callback);
  }
  delatePin(data, callback) {
    this.delateCurrentPin(data, callback);
  }
  addFavourites(data, callback) {
    this.addCurrentFavourites(data, callback);
  }
  delateFavourites(data, callback) {
    this.delateCurrentFavourites(data, callback);
  }
  downloadFileById(id, userId, callback) {
    this.downloadFile(id, userId, callback);
  }
  authorizationUser(data, callback) {
    this.authorization(data, callback);
  }
  exitUser(data, callback) {
    this.exit(data, callback);
  }
}
;// ./src/components/ui/Tooltip/Tooltip.js



class Tooltip {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const tooltipPopover = new Div({
      class: [this.params.class, this.params.class + "--top"]
    }).element;
    const tooltipArrow = new Div({
      class: "arrow"
    }).element;
    const tooltipHeading = new Heading({
      class: "tooltip-header",
      level: 3,
      text: this.params.title
    }).element;
    tooltipPopover.role = "tooltip";
    tooltipPopover.id = this.params.id;
    tooltipPopover.append(tooltipHeading, tooltipArrow);
    return {
      tooltipPopover,
      tooltipArrow
    };
  }
}
;// ./src/utils/setPositionTooltip.js
function setPositionTooltip(parent, tooltip, tooltipArrow) {
  const {
    top,
    left
  } = parent.getBoundingClientRect();
  tooltip.style.left = left + parent.offsetWidth / 2 - tooltip.offsetWidth / 2 + "px";
  tooltip.style.top = top - tooltip.offsetHeight + tooltipArrow.offsetHeight - 8 + "px";
  tooltipArrow.style.left = tooltip.offsetWidth / 2 - tooltipArrow.offsetWidth / 2 + "px";
}
;// ./src/components/widget-tooltip/WidgetTooltip.js


class WidgetTooltip {
  constructor(form) {
    this.form = form;
    this._tooltips = [];
  }
  get tooltips() {
    return this._tooltips;
  }
  getId() {
    return performance.now() + Math.random(1000);
  }
  pushTooltip(tooltip, id) {
    this.tooltips.push({
      id,
      tooltip
    });
  }
  removeTooltip(id) {
    const removeEl = this.tooltips.find(el => id === el.id);
    if (removeEl) {
      removeEl.tooltip.remove();
      this.form.removeAttribute("aria-describedby");
      this.tooltips.filter(el => id !== el.id);
    }
  }
  actionTooltip(text) {
    this.showTooltip(text);
    const tooltips = document.querySelectorAll(".tooltip");
    if (tooltips.length > 2) {
      tooltips.forEach((el, indx) => {
        if (indx != tooltips.length - 1) {
          el.remove();
        }
      });
    }
    setTimeout(() => {
      const attrForm = this.form.getAttribute("aria-describedby");
      console.log(attrForm);
      this.removeTooltip(attrForm);
    }, 5000);
  }
  showTooltip(text) {
    const id = "tooltip" + this.getId();
    this.tooltip = new Tooltip({
      class: "tooltip",
      title: text,
      id: id
    }).element;
    this.pushTooltip(this.tooltip.tooltipPopover, id);
    document.body.appendChild(this.tooltip.tooltipPopover);
    setPositionTooltip(this.form, this.tooltip.tooltipPopover, this.tooltip.tooltipArrow);
    this.form.setAttribute("aria-describedby", id);
    return id;
  }
}
;// ./src/components/sign-in-window/SignInWindow.js








class SignInWindow {
  constructor(parentEl, stateApp, fullApp, loader, url) {
    this.parentEl = parentEl;
    this.stateApp = stateApp;
    this.fullApp = fullApp;
    this.loader = loader;
    this.url = url;
    this.api = new ChatAPI(this.url);
  }
  bindToDOM() {
    this.formContainer = new Div({
      class: "form-container"
    }).element;
    this.formTitle = new Heading({
      class: "form-title",
      level: 1,
      text: "Войдите в аккаунт:"
    }).element;
    this.formRegister = new Form({
      class: "form-register-or-sign-in"
    }).element;
    this.userInfoEmailContainer = new Div({
      class: "user-info-container"
    }).element;
    this.userInfoEmailLabel = new Label({
      class: "label-user-info",
      for: "input-email",
      text: "Почтовый адрес:"
    }).element;
    this.userInfoEmailInput = new Input({
      class: "input-user-info",
      type: "email",
      id: "input-email",
      name: "email",
      placeholder: "Введите почтовый адрес...",
      required: true
    }).element;
    this.userInfoPasswordContainer = new Div({
      class: "user-info-container"
    }).element;
    this.userInfoPasswordLabel = new Label({
      class: "label-user-info",
      for: "input-password",
      text: "Пароль:"
    }).element;
    this.userInfoPasswordInput = new Input({
      class: "input-user-info",
      type: "password",
      id: "input-password",
      name: "password",
      placeholder: "Введите пароль...",
      required: true
    }).element;
    this.formBtnsContainer = new Div({
      class: "form-btns-container"
    }).element;
    this.buttonSignIn = new Button({
      class: "button-sign-in",
      text: "Войти;)",
      type: "submit"
    }).element;
    this.buttonGoToRegistration = new Button({
      class: "button-go-to-registration",
      text: "Перейти на регистрацию",
      type: "button"
    }).element;
    this.formBtnsContainer.append(this.buttonGoToRegistration, this.buttonSignIn);
    this.parentEl.appendChild(this.formContainer);
    this.formContainer.append(this.formTitle, this.formRegister);
    this.formRegister.append(this.userInfoEmailContainer, this.userInfoPasswordContainer, this.formBtnsContainer);
    this.userInfoEmailContainer.append(this.userInfoEmailLabel, this.userInfoEmailInput);
    this.userInfoPasswordContainer.append(this.userInfoPasswordLabel, this.userInfoPasswordInput);
    this.registerEvents();
    this.loader.remove();
  }
  registerEvents() {
    this.formRegister.addEventListener("submit", this.onSignIn.bind(this));
    this.buttonGoToRegistration.addEventListener("click", this.goToRegistration.bind(this));
  }
  goToRegistration() {
    this.parentEl.innerHTML = "";
    localStorage.setItem("page", JSON.stringify({
      page: "registerInWindow"
    }));
    location.reload();
  }
  onSignIn(e) {
    e.preventDefault();
    const formData = new FormData(this.formRegister);
    this.api.authorizationUser(Object.fromEntries(formData), data => {
      console.log(data);
      if (data.status == "error") {
        console.error(data.message);
        const widgetTooltip = new WidgetTooltip(e.target.querySelector("#input-email"));
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
;// ./src/utils/validatorForm.js
function validatorForm(type, data) {
  if (type === "email") {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
    if (data.match(emailRegex)) {
      return {
        valid: true,
        message: "Email address is valid."
      };
    } else {
      return {
        valid: false,
        message: "Invalid email address."
      };
    }
  } else if (type === "password") {
    if (data.length >= 8) {
      return {
        valid: true,
        message: "Password is valid."
      };
    } else {
      return {
        valid: false,
        message: "Password must be at least 8 characters long."
      };
    }
  }
}
;// ./src/components/registration-window/RegistrationWindow.js









class RegistrationWindow {
  constructor(parentEl, stateApp, fullApp, loader, url) {
    this.parentEl = parentEl;
    this.stateApp = stateApp;
    this.fullApp = fullApp;
    this.loader = loader;
    this.url = url;
    this.api = new ChatAPI(this.url);
  }
  bindToDOM() {
    this.formContainer = new Div({
      class: "form-container"
    }).element;
    this.formTitle = new Heading({
      class: "form-title",
      level: 1,
      text: "Регистрация аккаунта:"
    }).element;
    this.formRegister = new Form({
      class: "form-register-or-sign-in"
    }).element;
    this.userInfoEmailContainer = new Div({
      class: "user-info-container"
    }).element;
    this.userInfoEmailLabel = new Label({
      class: "label-user-info",
      for: "input-email",
      text: "Почтовый адрес:"
    }).element;
    this.userInfoEmailInput = new Input({
      class: "input-user-info",
      type: "email",
      id: "input-email",
      name: "email",
      placeholder: "Введите почтовый адрес...",
      required: true
    }).element;
    this.userInfoNameContainer = new Div({
      class: "user-info-container"
    }).element;
    this.userInfoNameLabel = new Label({
      class: "label-user-info",
      for: "input-name",
      text: "Имя:"
    }).element;
    this.userInfoNameInput = new Input({
      class: "input-user-info",
      type: "text",
      id: "input-name",
      name: "name",
      placeholder: "Введите имя...",
      required: true
    }).element;
    this.userInfoPasswordContainer = new Div({
      class: "user-info-container"
    }).element;
    this.userInfoPasswordLabel = new Label({
      class: "label-user-info",
      for: "input-password",
      text: "Пароль:"
    }).element;
    this.userInfoPasswordInput = new Input({
      class: "input-user-info",
      type: "password",
      id: "input-password",
      name: "password",
      placeholder: "Введите пароль...",
      required: true
    }).element;
    this.formBtnsContainer = new Div({
      class: "form-btns-container"
    }).element;
    this.buttonRegister = new Button({
      class: "button-register",
      text: "Зарегистрироваться;)",
      type: "submit"
    }).element;
    this.buttonGoToSignIn = new Button({
      class: "button-go-to-sign-in",
      text: "Перейти на вход в аккаунт",
      type: "button"
    }).element;
    this.formBtnsContainer.append(this.buttonGoToSignIn, this.buttonRegister);
    this.parentEl.appendChild(this.formContainer);
    this.formContainer.append(this.formTitle, this.formRegister);
    this.formRegister.append(this.userInfoEmailContainer, this.userInfoNameContainer, this.userInfoPasswordContainer, this.formBtnsContainer);
    this.userInfoEmailContainer.append(this.userInfoEmailLabel, this.userInfoEmailInput);
    this.userInfoNameContainer.append(this.userInfoNameLabel, this.userInfoNameInput);
    this.userInfoPasswordContainer.append(this.userInfoPasswordLabel, this.userInfoPasswordInput);
    this.registerEvents();
    this.loader.remove();
  }
  registerEvents() {
    this.formRegister.addEventListener("submit", this.onСreateUser.bind(this));
    this.buttonGoToSignIn.addEventListener("click", this.goToSignIn.bind(this));
  }
  goToSignIn() {
    this.parentEl.innerHTML = "";
    localStorage.setItem("page", JSON.stringify({
      page: "singInWindow"
    }));
    location.reload();
  }
  onСreateUser(e) {
    e.preventDefault();
    const formData = new FormData(this.formRegister);
    const validEmail = validatorForm("email", Object.fromEntries(formData).email);
    const validPassword = validatorForm("password", Object.fromEntries(formData).password);
    if (validEmail.valid && validPassword.valid) {
      if (Object.fromEntries(formData).email && Object.fromEntries(formData).password && Object.fromEntries(formData).name) {
        this.api.createUser(Object.fromEntries(formData), data => {
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
        const widgetTooltip = new WidgetTooltip(e.target.querySelector("#input-email"));
        widgetTooltip.actionTooltip(validEmail.message);
      }
      if (validEmail.valid == false) {
        const widgetTooltip = new WidgetTooltip(e.target.querySelector("#input-password"));
        widgetTooltip.actionTooltip(validPassword.message);
      }
    }
  }
}
;// ./src/environment/environment.js
const API_ROOT = "MISSING_ENV_VAR".API_ROOT || "https://ahj-diploma-backend-kgk7.onrender.com/";
/* harmony default export */ const environment = (API_ROOT);
;// ./src/classes/StateApp.js
class StateApp {
  constructor() {
    this._user = [];
  }
  init() {
    this.save(this.user);
  }
  get user() {
    return this._user;
  }
  save(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  load() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
;// ./src/components/ui/Link/Link.js

class Link {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const link = document.createElement("a");
    link.classList.add(this.params.class);
    link.id = this.params.id;
    link.href = this.params.href;
    link.textContent = this.params.text;
    return link;
  }
}
;// ./src/components/ui/Paragraph/Paragraph.js

class Paragraph {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const p = document.createElement("p");
    !Array.isArray(this.params.class) ? p.classList.add(this.params.class) : p.classList.add(...this.params.class);
    p.textContent = this.params.text;
    if (this.params.id) p.id = this.params.id;
    return p;
  }
}
;// ./src/components/link-message/LinkMessage.js




class LinkMessage {
  constructor(parentEl, data) {
    this.parentEl = parentEl;
    this.data = data;
  }
  bindToDOM() {
    const messageContainer = new Div({
      class: "message-container"
    }).element;
    const cityParagraph = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city
    }).element;
    const messageDate = new Paragraph({
      class: "message-date",
      text: "Дата создания: " + this.data.date
    }).element;
    const link = new Link({
      class: "message-link",
      id: this.data.id,
      href: this.data.message,
      text: "Ссылка: " + this.data.message
    }).element;
    const actionsFavContainer = new Div({
      class: "actions-fav-container"
    }).element;
    const btnAddFav = new Button({
      class: "btn-fav-add",
      text: "Добавить в избранное",
      type: "button"
    }).element;
    const btnDelFav = new Button({
      class: "btn-fav-del",
      text: "Удалить из избранного",
      type: "button"
    }).element;
    actionsFavContainer.append(btnAddFav, btnDelFav);
    const btnPin = new Button({
      class: "btn-pin",
      text: "📌",
      type: "button",
      id: "id" + this.data.id.replaceAll("-", "")
    }).element;
    if (this.data.pin === true) {
      btnPin.classList.add("btn-pin_active");
    }
    messageContainer.append(btnPin, link, cityParagraph, messageDate, actionsFavContainer);
    this.parentEl.appendChild(messageContainer);
  }
}
;// ./src/components/text-message/TextMessage.js



class TextMessage {
  constructor(parentEl, data) {
    this.parentEl = parentEl;
    this.data = data;
  }
  bindToDOM() {
    const textMes = new Paragraph({
      class: "message",
      text: this.data.message
    }).element;
    textMes.id = this.data.id;
    const messageContainer = new Div({
      class: "message-container"
    }).element;
    const messageСoors = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city
    }).element;
    const messageDate = new Paragraph({
      class: "message-date",
      text: "Дата создания: " + this.data.date
    }).element;
    const btnPin = new Button({
      class: "btn-pin",
      text: "📌",
      type: "button",
      id: "id" + this.data.id.replaceAll("-", "")
    }).element;
    if (this.data.pin === true) {
      btnPin.classList.add("btn-pin_active");
    }
    const actionsFavContainer = new Div({
      class: "actions-fav-container"
    }).element;
    const btnAddFav = new Button({
      class: "btn-fav-add",
      text: "Добавить в избранное",
      type: "button"
    }).element;
    const btnDelFav = new Button({
      class: "btn-fav-del",
      text: "Удалить из избранного",
      type: "button"
    }).element;
    actionsFavContainer.append(btnAddFav, btnDelFav);
    messageContainer.append(btnPin, textMes, messageСoors, messageDate, actionsFavContainer);
    this.parentEl.appendChild(messageContainer);
  }
}
;// ./src/components/ui/Img/Img.js

class Img {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const img = document.createElement("img");
    !Array.isArray(this.params.class) ? img.classList.add(this.params.class) : img.classList.add(...this.params.class);
    img.id = this.params.id;
    img.src = this.params.src;
    img.alt = this.params.alt;
    return img;
  }
}
;// ./src/components/image-message/ImageMessage.js




class ImageMessage {
  constructor(parentEl, data) {
    this.parentEl = parentEl;
    this.data = data;
  }
  bindToDOM() {
    const btnDownload = new Button({
      class: "btn-download",
      text: "⬇️",
      type: "button"
    }).element;
    const imgName = new Paragraph({
      class: "file-name",
      text: `Название изображения - ${this.data.name}`
    }).element;
    const img = new Img({
      class: "img-file",
      src: this.data.src,
      alt: this.data.name,
      id: this.data.id
    }).element;
    const messageDate = new Paragraph({
      class: "message-date",
      text: "Дата создания: " + this.data.date
    }).element;
    const messageContainer = new Div({
      class: "message-container"
    }).element;
    const messageСoors = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city
    }).element;
    const btnPin = new Button({
      class: ["btn-pin"],
      text: "📌",
      type: "button",
      id: "id" + this.data.id.replaceAll("-", "")
    }).element;
    if (this.data.pin === true) {
      btnPin.classList.add("btn-pin_active");
    }
    const btnAddFav = new Button({
      class: "btn-fav-add",
      text: "Добавить в избранное",
      type: "button"
    }).element;
    const btnDelFav = new Button({
      class: "btn-fav-del",
      text: "Удалить из избранного",
      type: "button"
    }).element;
    const actionsFavContainer = new Div({
      class: "actions-fav-container"
    }).element;
    actionsFavContainer.append(btnAddFav, btnDelFav);
    messageContainer.append(btnPin, imgName, img, messageСoors, messageDate, btnDownload, actionsFavContainer);
    this.parentEl.appendChild(messageContainer);
  }
}
;// ./src/components/ui/Video/Video.js

class Video {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const video = document.createElement("video");
    video.controls = this.params.controls;
    video.classList.add(this.params.class);
    const source = document.createElement("source");
    source.src = this.params.src;
    source.type = this.params.type;
    video.id = this.params.id;
    video.appendChild(source);
    return video;
  }
}
;// ./src/components/video-message/VideoMessage.js




class VideoMessage {
  constructor(parentEl, data) {
    this.parentEl = parentEl;
    this.data = data;
  }
  bindToDOM() {
    console.log(this.data.src);
    this.video = new Video({
      controls: true,
      class: "video-file",
      src: this.data.src,
      type: this.data.type,
      id: this.data.id
    }).element;
    const btnDownload = new Button({
      class: "btn-download",
      text: "⬇️",
      type: "button"
    }).element;
    const videoName = new Paragraph({
      class: "file-name",
      text: `Название видео - ${this.data.name}`
    }).element;
    const messageDate = new Paragraph({
      class: "message-date",
      text: "Дата создания: " + this.data.date
    }).element;
    const messageContainer = new Div({
      class: "message-container"
    }).element;
    const messageСoors = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city
    }).element;
    const btnPin = new Button({
      class: ["btn-pin"],
      text: "📌",
      type: "button",
      id: "id" + this.data.id.replaceAll("-", "")
    }).element;
    if (this.data.pin === true) {
      btnPin.classList.add("btn-pin_active");
    }
    const btnAddFav = new Button({
      class: "btn-fav-add",
      text: "Добавить в избранное",
      type: "button"
    }).element;
    const btnDelFav = new Button({
      class: "btn-fav-del",
      text: "Удалить из избранного",
      type: "button"
    }).element;
    const actionsFavContainer = new Div({
      class: "actions-fav-container"
    }).element;
    actionsFavContainer.append(btnAddFav, btnDelFav);
    messageContainer.append(btnPin, videoName, this.video, messageСoors, messageDate, btnDownload, actionsFavContainer);
    this.parentEl.appendChild(messageContainer);
    this.video.addEventListener("click", this.addStyleVideo.bind(this));
  }
  addStyleVideo() {
    if (!this.video.paused && !this.video.ended) {
      this.video.classList.add("video-file_play");
    } else {
      this.video.classList.remove("video-file_play");
    }
  }
}
;// ./src/components/ui/Audio/Audio.js

class Audio {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const audio = document.createElement("audio");
    audio.controls = this.params.controls;
    const source = document.createElement("source");
    source.src = this.params.src;
    audio.id = this.params.id;
    source.type = this.params.type;
    audio.appendChild(source);
    !Array.isArray(this.params.class) ? audio.classList.add(this.params.class) : audio.classList.add(...this.params.class);
    return audio;
  }
}
;// ./src/components/audio-message/AudioMessage.js




class AudioMessage {
  constructor(parentEl, data) {
    this.parentEl = parentEl;
    this.data = data;
  }
  bindToDOM() {
    this.audio = new Audio({
      controls: true,
      src: this.data.src,
      id: this.data.id,
      type: this.data.type,
      class: "audio-file"
    }).element;
    const btnDownload = new Button({
      class: "btn-download",
      text: "⬇️",
      type: "button"
    }).element;
    const audioName = new Paragraph({
      class: "file-name",
      text: `Название аудио - ${this.data.name}`
    }).element;
    const messageDate = new Paragraph({
      class: "message-date",
      text: "Дата создания: " + this.data.date
    }).element;
    const messageContainer = new Div({
      class: "message-container"
    }).element;
    const messageСoors = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city
    }).element;
    const btnPin = new Button({
      class: ["btn-pin"],
      text: "📌",
      type: "button",
      id: "id" + this.data.id.replaceAll("-", "")
    }).element;
    if (this.data.pin === true) {
      btnPin.classList.add("btn-pin_active");
    }
    const btnAddFav = new Button({
      class: "btn-fav-add",
      text: "Добавить в избранное",
      type: "button"
    }).element;
    const btnDelFav = new Button({
      class: "btn-fav-del",
      text: "Удалить из избранного",
      type: "button"
    }).element;
    const actionsFavContainer = new Div({
      class: "actions-fav-container"
    }).element;
    actionsFavContainer.append(btnAddFav, btnDelFav);
    messageContainer.append(btnPin, audioName, this.audio, messageСoors, messageDate, btnDownload, actionsFavContainer);
    this.parentEl.appendChild(messageContainer);
    this.audio.addEventListener("click", this.addStyleVideo.bind(this));
  }
  addStyleVideo() {
    if (!this.audio.paused) {
      this.audio.classList.add("audio-file_play");
    } else {
      this.audio.classList.remove("audio-file_play");
    }
  }
}
;// ./src/components/ui/Span/Span.js

class Span {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const span = document.createElement("span");
    span.classList.add(this.params.class);
    if (this.params.text) span.textContent = this.params.text;
    return span;
  }
}
;// ./src/components/file-message/FileMessage.js





class FileMessage {
  constructor(parentEl, data, download) {
    this.parentEl = parentEl;
    this.data = data;
    this.download = download;
  }
  bindToDOM() {
    const messageContainer = new Div({
      class: "message-container"
    }).element;
    const messageСoors = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city
    }).element;
    const spanIconFile = new Span({
      class: "span-icon-file"
    }).element;
    const messageDate = new Paragraph({
      class: "message-date",
      text: "Дата создания: " + this.data.date
    }).element;
    const fileName = new Paragraph({
      class: "file-name",
      text: `Название файла - ${this.data.name}`
    }).element;
    const messageLinkFile = new Link({
      id: this.data.id,
      class: "message-link-file",
      href: this.data.src,
      text: "Скачать файл"
    }).element;
    messageLinkFile.download = this.download;
    messageLinkFile.appendChild(spanIconFile);
    const actionsFavContainer = new Div({
      class: "actions-fav-container"
    }).element;
    const btnAddFav = new Button({
      class: "btn-fav-add",
      text: "Добавить в избранное",
      type: "button"
    }).element;
    const btnDelFav = new Button({
      class: "btn-fav-del",
      text: "Удалить из избранного",
      type: "button"
    }).element;
    actionsFavContainer.append(btnAddFav, btnDelFav);
    const btnPin = new Button({
      class: "btn-pin",
      text: "📌",
      type: "button",
      id: "id" + this.data.id.replaceAll("-", "")
    }).element;
    if (this.data.pin === true) {
      btnPin.classList.add("btn-pin_active");
    }
    messageContainer.append(btnPin, fileName, messageLinkFile, messageСoors, messageDate, actionsFavContainer);
    this.parentEl.appendChild(messageContainer);
  }
}
;// ./src/components/pins/pin-file/PinFile.js



class PinFile {
  constructor(elParent, data) {
    this.elParent = elParent;
    this.data = data;
  }
  bindToDOM() {
    const textMes = new Paragraph({
      class: "pin-message",
      text: "Тип файла - " + this.data.type,
      id: this.data.id
    }).element;
    const textNameFile = new Paragraph({
      class: "pin-name-message",
      text: "Имя файла - " + this.data.name
    }).element;
    const btnDownload = new Button({
      class: "btn-download",
      text: "⬇️",
      type: "button"
    }).element;
    const messageСoors = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city
    }).element;
    const btnPin = new Button({
      class: ["btn-pin"],
      text: "📌",
      type: "button",
      id: "id" + this.data.id.replaceAll("-", "")
    }).element;
    const pinMessage = new Div({
      class: "pin-message-all"
    }).element;
    const pinContainer = new Div({
      class: "pin-message-container"
    }).element;
    const pinContainerMessage = new Div({
      class: "pin-message-container-mess"
    }).element;
    if (this.data.pin === true) {
      btnPin.classList.add("btn-pin_active");
    }
    pinContainerMessage.appendChild(pinContainer);
    pinMessage.append(btnPin, textMes, textNameFile, messageСoors, btnDownload);
    pinContainer.appendChild(pinMessage);
    this.elParent.appendChild(pinContainer);
  }
}
;// ./src/components/pins/pin-message/PinMessage.js




class PinMessage {
  constructor(elParent, data) {
    this.elParent = elParent;
    this.data = data;
  }
  bindToDOM() {
    const cityText = new Paragraph({
      class: "message-coors",
      text: "Местоположение: " + this.data.city
    }).element;
    const mesLink = new Link({
      id: this.data.id,
      class: "message-link-pin-message",
      href: this.data.message,
      text: this.data.message
    }).element;
    mesLink.style.display = "block";
    const mesText = new Paragraph({
      class: "pin-message",
      text: this.data.message,
      id: this.data.id
    }).element;
    const btnPin = new Button({
      class: ["btn-pin", "btn-pin_active"],
      text: "📌",
      type: "button",
      id: "id" + this.data.id.replaceAll("-", "")
    }).element;
    const pinMessage = new Div({
      class: "pin-message-all"
    }).element;
    const pinContainer = new Div({
      class: "pin-message-container"
    }).element;
    const pinContainerMessage = new Div({
      class: "pin-message-container-mess"
    }).element;
    if (this.data.pin === true) {
      btnPin.classList.add("btn-pin_active");
    }
    if (this.data.type == "link") {
      pinMessage.append(btnPin, mesLink, cityText);
    } else {
      pinMessage.append(btnPin, mesText, cityText);
    }
    pinContainerMessage.appendChild(pinContainer);
    pinContainer.appendChild(pinMessage);
    this.elParent.appendChild(pinContainer);
  }
}
;// ./src/components/added-number-in-count/AddedNumberInCount.js
class AddedNumberInCount {
  constructor(listCounts, nameCount) {
    this.listCounts = listCounts;
    this.nameCount = nameCount;
  }
  addNumberInCount() {
    this.listCounts.forEach(count => {
      if (count.textContent == this.nameCount) {
        count.nextElementSibling.textContent++;
      }
      if (count.textContent != "Избранное" && count.textContent == "Все сообщения") {
        count.nextElementSibling.textContent++;
      }
    });
  }
}
;// ./src/functions/addingActiveTabForText.js
function addingActiveTabForText(tabName, tabText) {
  [...document.querySelectorAll("." + tabName)].forEach(elem => {
    if (elem.id == tabText) elem.classList.add(`${tabName}_active`);
  });
}
;// ./src/components/pin-display/PinDisplay.js
class PinDisplay {
  constructor(parentEl, api, pinMessagesClasses, stateApp) {
    this.parentEl = parentEl;
    this.api = api;
    this.pinMessagesClasses = pinMessagesClasses;
    this.stateApp = stateApp;
    this.userId = this.stateApp.load().id;
  }
  bindToDOM() {
    this.api.getPin(this.userId, data => {
      if (data.status == "ok") {
        console.log(data.message);
        if (data.pin.type) {
          if (data.pin.type == "link" || data.pin.type == "different") {
            const pinMessage = new this.pinMessagesClasses.pinMessage(this.parentEl, data.pin);
            pinMessage.bindToDOM();
          } else if (data.pin.type.includes("image") || data.pin.type.includes("video") || data.pin.type.includes("audio")) {
            const pinFile = new this.pinMessagesClasses.pinFile(this.parentEl, data.pin);
            pinFile.bindToDOM();
          } else if (data.pin.type.includes("application")) {
            const pinFile = new this.pinMessagesClasses.pinFile(this.parentEl, data.pin);
            pinFile.bindToDOM();
          }
        }
        if (document.querySelector(".content-container") && document.querySelector(".pin-message-container")) {
          document.querySelector(".content-container").style.marginTop = document.querySelector(".pin-message-container").clientHeight + 20 + "px";
          document.querySelector(".content-container").style.maxHeight = `calc(94.8% - ${document.querySelector(".pin-message-container").clientHeight}px)`;
        }
      } else {
        console.error(data.message);
        if (document.querySelector(".content-container")) {
          document.querySelector(".content-container").style.marginTop = 10 + "px";
          document.querySelector(".content-container").style.maxHeight = `94.8%`;
        }
      }
    });
  }
}
;// ./src/components/websocket/MainWebSocket.js



class MainWebSocket {
  constructor(url, differentMessages, addedNumberInCount, parentEl, stateApp, api) {
    this.websocket = new WebSocket(url);
    this.differentMessages = differentMessages;
    this.addedNumberInCount = addedNumberInCount;
    this.parentEl = parentEl;
    this.stateApp = stateApp;
    this.api = api;
    this.userId = this.stateApp.load().id;
  }
  async subscribeOnEvents(listCounts, chatContainer) {
    this.listCounts = listCounts;
    this.chatContainer = chatContainer;
    this.websocket.addEventListener("open", () => {});
    this.websocket.addEventListener("message", e => {
      const data = JSON.parse(e.data);
      if (this.userId == data.userId) {
        if (data.type) {
          if (data.type == "link") {
            const linkMessage = new this.differentMessages.linkMessage(this.parentEl, data);
            linkMessage.bindToDOM();
            const addedNumberInCount = new this.addedNumberInCount(this.listCounts, "Ссылки");
            addedNumberInCount.addNumberInCount();
          } else if (data.type == "different") {
            const textMessage = new this.differentMessages.textMessage(this.parentEl, data);
            textMessage.bindToDOM();
            const addedNumberInCount = new this.addedNumberInCount(this.listCounts, "");
            addedNumberInCount.addNumberInCount();
          } else if (data.type.includes("image")) {
            const imageMessage = new this.differentMessages.imageMessage(this.parentEl, data);
            imageMessage.bindToDOM();
            const addedNumberInCount = new this.addedNumberInCount(this.listCounts, "Изображения");
            addedNumberInCount.addNumberInCount();
          } else if (data.type.includes("video")) {
            const videoMessage = new this.differentMessages.videoMessage(this.parentEl, data);
            videoMessage.bindToDOM();
            const addedNumberInCount = new this.addedNumberInCount(this.listCounts, "Видео");
            addedNumberInCount.addNumberInCount();
          } else if (data.type.includes("audio")) {
            const audioMessage = new this.differentMessages.audioMessage(this.parentEl, data);
            audioMessage.bindToDOM();
            const addedNumberInCount = new this.addedNumberInCount(this.listCounts, "Аудио");
            addedNumberInCount.addNumberInCount();
          } else if (data.type.includes("application")) {
            const fileMessage = new this.differentMessages.fileMessage(this.parentEl, data, true);
            fileMessage.bindToDOM();
            const addedNumberInCount = new this.addedNumberInCount(this.listCounts, "Файлы");
            addedNumberInCount.addNumberInCount();
          }
        } else if (data.count) {
          this.listCounts.forEach(element => {
            if (element.textContent == data.nameCount) {
              element.nextElementSibling.textContent = data.count;
            }
          });
        } else if (data.pin == true && data.idPin) {
          console.log(`#${data.idPin}`);
          document.querySelector(".btn-pin_active") && document.querySelector(".btn-pin_active").classList.remove("btn-pin_active");
          // data.pinBtn.classList.add('btn-pin_active');
          document.querySelector(`#${data.idPin}`) && document.querySelector(`#${data.idPin}`).classList.add("btn-pin_active");
          if (document.querySelector(".pin-message-container")) document.querySelector(".pin-message-container").remove();
          this.pinDisplay = new PinDisplay(this.chatContainer, this.api, {
            pinMessage: PinMessage,
            pinFile: PinFile
          }, this.stateApp);
          this.pinDisplay.bindToDOM();
        } else if (data.pin == false && data.idPin) {
          console.log(`#${data.idPin}`);
          if (document.querySelector(".pin-message-container")) document.querySelector(".pin-message-container").remove("btn-pin_active");
          document.querySelector(`#${data.idPin}`) && document.querySelector(`#${data.idPin}`).classList.remove();
          this.pinDisplay = new PinDisplay(this.chatContainer, this.api, {
            pinMessage: PinMessage,
            pinFile: PinFile
          }, this.stateApp);
          this.pinDisplay.bindToDOM();
          document.querySelector(".btn-pin_active") && document.querySelector(".btn-pin_active").classList.remove("btn-pin_active");
        }
      }
    });
  }
  sendInWebsocket(typeMessage, params) {
    if (typeMessage == "text") {
      this.websocket.send(JSON.stringify({
        date: params.date,
        userId: params.userId,
        id: params.id,
        message: params.message,
        city: params.city,
        pin: params.pin,
        type: params.type
      }));
    } else if (typeMessage == "file") {
      this.websocket.send(JSON.stringify({
        date: params.date,
        userId: params.userId,
        id: params.id,
        type: params.type,
        src: params.src,
        city: params.city,
        pin: params.pin,
        name: params.name
      }));
    } else if (typeMessage == "count") {
      this.websocket.send(JSON.stringify({
        userId: params.userId,
        count: params.count,
        nameCount: params.nameCount
      }));
    } else if (typeMessage == "pin") {
      this.websocket.send(JSON.stringify({
        userId: params.userId,
        pin: params.pin,
        idPin: params.idPin
      }));
    } else {
      console.error("Неправильный тип сообщения:(");
    }
  }
}
;// ./src/components/actions-with-message/ActionsWithMessage.js

class ActionsWithMessage {
  constructor(parentEl, btnsClasses, pinMessageContainerClass, api, pinClasses, messagesClasses, messageContainerClass, fileNameTextBtn, mainWebsocket, actionFavContainerClass, stateApp) {
    this.parentEl = parentEl;
    this.btnsClasses = btnsClasses;
    this.pinMessageContainerClass = pinMessageContainerClass;
    this.api = api;
    this.pinClasses = pinClasses;
    this.messagesClasses = messagesClasses;
    this.messageContainerClass = messageContainerClass;
    this.fileNameTextBtn = fileNameTextBtn;
    this.mainWebsocket = mainWebsocket;
    this.actionFavContainerClass = actionFavContainerClass;
    this.stateApp = stateApp;
    this.userId = this.stateApp.load().id;
  }
  subscribeToEvents() {
    this.parentEl.addEventListener("click", this.actionsWithMessageEvents.bind(this));
  }
  actionsWithMessageEvents(e) {
    if (e.target.closest("." + this.btnsClasses.pinActive)) {
      this.delatePin(e);
    } else if (e.target.closest("." + this.btnsClasses.pin)) {
      this.addPin(e);
    } else if (e.target.closest("." + this.btnsClasses.favAdd)) {
      this.addInFavourites(e);
    } else if (e.target.closest("." + this.btnsClasses.favDel)) {
      this.delateFavourites(e);
    }
    this.eventByDownloadFile(e);
  }
  eventByDownloadFile(e) {
    if (e.target.closest(".pin-message-all")) {
      const pinMessageContainer = e.target.closest(".pin-message-all").querySelector(".pin-message");
      const id = pinMessageContainer.id;
      if (e.target.closest("." + this.btnsClasses.btnDownload)) {
        e.target.closest("." + this.btnsClasses.btnDownload).addEventListener("click", () => this.downloadFileById(id, this.userId));
      }
    }
    if (e.target.closest("." + this.messageContainerClass)) {
      const messageContainer = e.target.closest("." + this.messageContainerClass);
      if (e.target.closest("." + this.btnsClasses.btnDownload)) {
        if (messageContainer.querySelector("." + this.messagesClasses.imgFile)) {
          const id = messageContainer.querySelector("." + this.messagesClasses.imgFile).id;
          e.target.closest("." + this.btnsClasses.btnDownload).addEventListener("click", () => this.downloadFileById(id, this.userId));
        } else if (messageContainer.querySelector("." + this.messagesClasses.videoFile)) {
          const id = messageContainer.querySelector("." + this.messagesClasses.videoFile).id;
          e.target.closest("." + this.btnsClasses.btnDownload).addEventListener("click", () => this.downloadFileById(id, this.userId));
        } else if (messageContainer.querySelector("." + this.messagesClasses.audioFile)) {
          const id = messageContainer.querySelector("." + this.messagesClasses.audioFile).id;
          e.target.closest("." + this.btnsClasses.btnDownload).addEventListener("click", () => this.downloadFileById(id, this.userId));
        }
      }
    }
  }
  delatePin(e) {
    if (document.querySelector("." + this.btnsClasses.pinActive)) {
      document.querySelector("." + this.btnsClasses.pinActive).classList.remove(this.btnsClasses.pinActive);
    }
    if (document.querySelector("." + this.pinMessageContainerClass)) document.querySelector("." + this.pinMessageContainerClass).remove();
    const messageContainer = e.target.closest("." + this.messageContainerClass);
    let id;
    if (e.target.closest(".pin-message-all")) {
      const pinMessageContainer = e.target.closest(".pin-message-all").querySelector(".pin-message");
      id = pinMessageContainer.id;
    }
    if (messageContainer) {
      if (messageContainer.querySelector("." + this.messagesClasses.videoFile)) {
        id = messageContainer.querySelector("." + this.messagesClasses.videoFile).id;
      } else if (messageContainer.querySelector("." + this.messagesClasses.audioFile)) {
        id = messageContainer.querySelector("." + this.messagesClasses.audioFile).id;
      } else if (messageContainer.querySelector("." + this.messagesClasses.imgFile)) {
        id = messageContainer.querySelector("." + this.messagesClasses.imgFile).id;
      } else if (messageContainer.querySelector("." + this.messagesClasses.messageFileLink)) {
        id = messageContainer.querySelector("." + this.messagesClasses.messageFileLink).id;
      } else if (messageContainer.querySelector("." + this.messagesClasses.message)) {
        id = messageContainer.querySelector("." + this.messagesClasses.message).id;
      } else if (messageContainer.querySelector("." + this.messagesClasses.messageLink)) {
        id = messageContainer.querySelector("." + this.messagesClasses.messageLink).id;
      }
    }
    this.api.delatePin({
      id,
      userId: this.userId
    }, data => {
      if (data.status == "ok") {
        console.log(data.message);
        this.mainWebsocket.sendInWebsocket("pin", {
          userId: this.userId,
          pin: false,
          idPin: "id" + e.target.closest("." + this.btnsClasses.pin).nextElementSibling.id.replaceAll("-", "")
        });
        document.querySelector(".content-container").style.marginTop = 10 + "px";
      } else {
        console.error(data.message);
      }
    });
  }
  addPin(e) {
    if (document.querySelector("." + this.btnsClasses.pinActive)) {
      document.querySelector("." + this.btnsClasses.pinActive).classList.remove(this.btnsClasses.pinActive);
    }
    if (document.querySelector("." + this.pinMessageContainerClass)) document.querySelector("." + this.pinMessageContainerClass).remove();
    const messageContainer = e.target.closest("." + this.messageContainerClass);
    let id;
    if (messageContainer.querySelector("." + this.messagesClasses.videoFile)) {
      id = messageContainer.querySelector("." + this.messagesClasses.videoFile).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.audioFile)) {
      id = messageContainer.querySelector("." + this.messagesClasses.audioFile).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.imgFile)) {
      id = messageContainer.querySelector("." + this.messagesClasses.imgFile).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.messageFileLink)) {
      id = messageContainer.querySelector("." + this.messagesClasses.messageFileLink).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.message)) {
      id = messageContainer.querySelector("." + this.messagesClasses.message).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.messageLink)) {
      id = messageContainer.querySelector("." + this.messagesClasses.messageLink).id;
    }
    this.api.addPin({
      id,
      userId: this.userId
    }, data => {
      if (data.status == "ok") {
        console.log(data.message);
        e.target.closest("." + this.btnsClasses.pin).classList.add(this.btnsClasses.pinActive);
        const btnPin = new Button({
          class: [this.btnsClasses.pin, this.btnsClasses.pinActive],
          text: "📌",
          type: "button"
        }).element;
        this.mainWebsocket.sendInWebsocket("pin", {
          userId: this.userId,
          pin: true,
          idPin: `id${id.replaceAll("-", "")}`
        });
        if (data.pin.pin === true) {
          btnPin.classList.add(this.btnsClasses.pinActive);
        }
        if (data.pin.type == "link" || data.pin.type == "different") {
          const pinMessage = new this.pinClasses.pinMessage(this.parentEl, data.pin);
          pinMessage.bindToDOM();
        } else if (data.pin.type.includes("image") || data.pin.type.includes("video") || data.pin.type.includes("audio")) {
          const pinFile = new this.pinClasses.pinFile(this.parentEl, data.pin);
          pinFile.bindToDOM();
        } else {
          const pinFile = new this.pinClasses.pinFile(this.parentEl, data.pin);
          pinFile.bindToDOM();
        }
        document.querySelector(".content-container").style.marginTop = document.querySelector(".pin-message-container").clientHeight + 20 + "px";
      } else {
        document.querySelector(".content-container").style.maxHeight = `94.8%`;
        console.error(data.message);
      }
    });
  }
  addInFavourites(e) {
    const messageContainer = e.target.closest("." + this.messageContainerClass);
    let id;
    if (messageContainer.querySelector("." + this.messagesClasses.videoFile)) {
      id = messageContainer.querySelector("." + this.messagesClasses.videoFile).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.audioFile)) {
      id = messageContainer.querySelector("." + this.messagesClasses.audioFile).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.imgFile)) {
      id = messageContainer.querySelector("." + this.messagesClasses.imgFile).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.messageFileLink)) {
      id = messageContainer.querySelector("." + this.messagesClasses.messageFileLink).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.message)) {
      id = messageContainer.querySelector("." + this.messagesClasses.message).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.messageLink)) {
      id = messageContainer.querySelector("." + this.messagesClasses.messageLink).id;
    }
    this.api.addFavourites({
      id,
      userId: this.userId
    }, data => {
      if (data.status == "ok") {
        console.log(data.message);
        const favouritesElem = [...document.querySelectorAll("." + this.fileNameTextBtn)].find(el => el.textContent == "Избранное");
        favouritesElem.nextElementSibling.textContent++;
        this.mainWebsocket.sendInWebsocket("count", {
          userId: this.userId,
          count: favouritesElem.nextElementSibling.textContent,
          nameCount: favouritesElem.textContent
        });
      } else {
        console.error(data.message);
      }
    });
  }
  delateFavourites(e) {
    const messageContainer = e.target.closest("." + this.messageContainerClass);
    let id;
    if (messageContainer.querySelector("." + this.messagesClasses.videoFile)) {
      id = messageContainer.querySelector("." + this.messagesClasses.videoFile).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.audioFile)) {
      id = messageContainer.querySelector("." + this.messagesClasses.audioFile).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.imgFile)) {
      id = messageContainer.querySelector("." + this.messagesClasses.imgFile).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.messageFileLink)) {
      id = messageContainer.querySelector("." + this.messagesClasses.messageFileLink).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.message)) {
      id = messageContainer.querySelector("." + this.messagesClasses.message).id;
    } else if (messageContainer.querySelector("." + this.messagesClasses.messageLink)) {
      id = messageContainer.querySelector("." + this.messagesClasses.messageLink).id;
    }
    this.api.delateFavourites({
      id,
      userId: this.userId
    }, data => {
      if (data.status == "ok") {
        console.log(data.message);
        const favouritesElem = [...document.querySelectorAll("." + this.fileNameTextBtn)].find(el => el.textContent == "Избранное");
        favouritesElem.nextElementSibling.textContent--;
        this.mainWebsocket.sendInWebsocket("count", {
          userId: this.userId,
          count: favouritesElem.nextElementSibling.textContent,
          nameCount: favouritesElem.textContent
        });
      } else {
        console.error(data.message);
      }
    });
  }
  downloadFileById(id, userId) {
    this.api.downloadFileById(id, userId, blob => {
      if (blob) {
        const filePath = `downloaded-file-${id}`;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = filePath;
        a.click();
        console.log("Successful file download with id: " + id);
      }
    });
  }
}
;// ./src/img/icons8-avi-100.png
const icons8_avi_100_namespaceObject = __webpack_require__.p + "0234bec32db271dbd391.png";
;// ./src/img/icons8-mp3-100.png
const icons8_mp3_100_namespaceObject = __webpack_require__.p + "16f79a3a7c223deb6066.png";
;// ./src/components/viewing-selected-files/ViewingSelectedFiles.js






class ViewingSelectedFiles {
  constructor(parentEl, elementTop, data) {
    this.parentEl = parentEl;
    this.elementTop = elementTop;
    this.data = data;
  }
  bindToDOM() {
    if (this.data.length > 1) {
      this.data.forEach(file => {
        if (file.type.includes("image")) {
          const url = URL.createObjectURL(file);
          const previewFileContainer = new Div({
            class: "preview-file-container"
          }).element;
          const previewImage = new Img({
            class: "preview-image",
            src: url,
            alt: file.name
          }).element;
          const previewText = new Paragraph({
            class: "preview-text",
            text: file.name
          }).element;
          previewFileContainer.append(previewImage, previewText);
          this.parentEl.appendChild(previewFileContainer);
        } else if (file.type.includes("application")) {
          const previewFileContainer = new Div({
            class: "preview-file-container"
          }).element;
          const previewFile = new Span({
            class: "preview-file"
          }).element;
          const previewText = new Paragraph({
            class: "preview-text",
            text: file.name
          }).element;
          previewFileContainer.append(previewFile, previewText);
          this.parentEl.appendChild(previewFileContainer);
        } else if (file.type.includes("video")) {
          const previewFileContainer = new Div({
            class: "preview-file-container"
          }).element;
          const previewVideo = new Img({
            class: "preview-video",
            src: icons8_avi_100_namespaceObject,
            alt: file.name
          }).element;
          const previewText = new Paragraph({
            class: "preview-text",
            text: file.name
          }).element;
          previewFileContainer.append(previewVideo, previewText);
          this.parentEl.appendChild(previewFileContainer);
        } else if (file.type.includes("audio")) {
          const previewFileContainer = new Div({
            class: "preview-file-container"
          }).element;
          const previewAudio = new Img({
            class: "preview-audio",
            src: icons8_mp3_100_namespaceObject,
            alt: file.name
          }).element;
          const previewText = new Paragraph({
            class: "preview-text",
            text: file.name
          }).element;
          previewFileContainer.append(previewAudio, previewText);
          this.parentEl.appendChild(previewFileContainer);
        }
      });
    } else if (this.data[0]) {
      if (this.data[0].type.includes("image")) {
        const previewFileContainer = new Div({
          class: "preview-file-container"
        }).element;
        const url = URL.createObjectURL(this.data[0]);
        const previewImage = new Img({
          class: "preview-image",
          src: url,
          alt: this.data[0].name
        }).element;
        const previewText = new Paragraph({
          class: "preview-text",
          text: this.data[0].name
        }).element;
        previewFileContainer.append(previewImage, previewText);
        this.parentEl.appendChild(previewFileContainer);
      } else if (this.data[0].type.includes("application")) {
        const previewFileContainer = new Div({
          class: "preview-file-container"
        }).element;
        const previewFile = new Span({
          class: "preview-file"
        }).element;
        const previewText = new Paragraph({
          class: "preview-text",
          text: this.data[0].name
        }).element;
        previewFileContainer.append(previewFile, previewText);
        this.parentEl.appendChild(previewFileContainer);
      } else if (this.data[0].type.includes("video")) {
        const previewFileContainer = new Div({
          class: "preview-file-container"
        }).element;
        const previewVideo = new Img({
          class: "preview-video",
          src: icons8_avi_100_namespaceObject,
          alt: this.data[0].name
        }).element;
        const previewText = new Paragraph({
          class: "preview-text",
          text: this.data[0].name
        }).element;
        previewFileContainer.append(previewVideo, previewText);
        this.parentEl.appendChild(previewFileContainer);
      } else if (this.data[0].type.includes("audio")) {
        const previewFileContainer = new Div({
          class: "preview-file-container"
        }).element;
        const previewAudio = new Img({
          class: "preview-audio",
          src: icons8_mp3_100_namespaceObject,
          alt: this.data[0].name
        }).element;
        const previewText = new Paragraph({
          class: "preview-text",
          text: this.data[0].name
        }).element;
        previewFileContainer.append(previewAudio, previewText);
        this.parentEl.appendChild(previewFileContainer);
      }
    }
    this.parentEl.style.bottom = `${this.elementTop.clientHeight + 30}px`;
  }
}
;// ./src/components/ui/Loader/Loader.js


class Loader {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const loader = new Div({
      class: this.params.class
    }).element;
    return loader;
  }
}
;// ./node_modules/axios/lib/helpers/bind.js


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

;// ./node_modules/axios/lib/utils.js




// utils is a library of generic helper functions non-specific to axios

const {toString: utils_toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = utils_toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({source, data}) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);

    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    }
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === 'function',
  isFunction(_global.postMessage)
);

const asap = typeof queueMicrotask !== 'undefined' ?
  queueMicrotask.bind(_global) : ( typeof process !== 'undefined' && process.nextTick || _setImmediate);

// *********************

/* harmony default export */ const utils = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: utils_hasOwnProperty,
  hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
});

;// ./node_modules/axios/lib/core/AxiosError.js




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});

const AxiosError_prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(AxiosError_prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(AxiosError_prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const core_AxiosError = (AxiosError);

;// ./node_modules/axios/lib/helpers/null.js
// eslint-disable-next-line strict
/* harmony default export */ const helpers_null = (null);

;// ./node_modules/axios/lib/helpers/toFormData.js




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (helpers_null || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const helpers_toFormData = (toFormData);

;// ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && helpers_toFormData(params, this, options);
}

const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

AxiosURLSearchParams_prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

AxiosURLSearchParams_prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const helpers_AxiosURLSearchParams = (AxiosURLSearchParams);

;// ./node_modules/axios/lib/helpers/buildURL.js





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function buildURL_encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || buildURL_encode;

  if (utils.isFunction(options)) {
    options = {
      serialize: options
    };
  } 

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new helpers_AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

;// ./node_modules/axios/lib/core/InterceptorManager.js




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const core_InterceptorManager = (InterceptorManager);

;// ./node_modules/axios/lib/defaults/transitional.js


/* harmony default export */ const defaults_transitional = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

;// ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js



/* harmony default export */ const classes_URLSearchParams = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams);

;// ./node_modules/axios/lib/platform/browser/classes/FormData.js


/* harmony default export */ const classes_FormData = (typeof FormData !== 'undefined' ? FormData : null);

;// ./node_modules/axios/lib/platform/browser/classes/Blob.js


/* harmony default export */ const classes_Blob = (typeof Blob !== 'undefined' ? Blob : null);

;// ./node_modules/axios/lib/platform/browser/index.js




/* harmony default export */ const browser = ({
  isBrowser: true,
  classes: {
    URLSearchParams: classes_URLSearchParams,
    FormData: classes_FormData,
    Blob: classes_Blob
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

;// ./node_modules/axios/lib/platform/common/utils.js
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = hasBrowserEnv && window.location.href || 'http://localhost';



;// ./node_modules/axios/lib/platform/index.js



/* harmony default export */ const platform = ({
  ...common_utils_namespaceObject,
  ...browser
});

;// ./node_modules/axios/lib/helpers/toURLEncodedForm.js






function toURLEncodedForm(data, options) {
  return helpers_toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

;// ./node_modules/axios/lib/helpers/formDataToJSON.js




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const helpers_formDataToJSON = (formDataToJSON);

;// ./node_modules/axios/lib/defaults/index.js










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: defaults_transitional,

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data) ||
      utils.isReadableStream(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return helpers_toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (utils.isResponse(data) || utils.isReadableStream(data)) {
      return data;
    }

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const lib_defaults = (defaults);

;// ./node_modules/axios/lib/helpers/parseHeaders.js




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const parseHeaders = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});

;// ./node_modules/axios/lib/core/AxiosHeaders.js





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils.freezeMethods(AxiosHeaders);

/* harmony default export */ const core_AxiosHeaders = (AxiosHeaders);

;// ./node_modules/axios/lib/core/transformData.js






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || lib_defaults;
  const context = response || config;
  const headers = core_AxiosHeaders.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

;// ./node_modules/axios/lib/cancel/isCancel.js


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

;// ./node_modules/axios/lib/cancel/CanceledError.js





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, core_AxiosError, {
  __CANCEL__: true
});

/* harmony default export */ const cancel_CanceledError = (CanceledError);

;// ./node_modules/axios/lib/core/settle.js




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new core_AxiosError(
      'Request failed with status code ' + response.status,
      [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

;// ./node_modules/axios/lib/helpers/parseProtocol.js


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

;// ./node_modules/axios/lib/helpers/speedometer.js


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const helpers_speedometer = (speedometer);

;// ./node_modules/axios/lib/helpers/throttle.js
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  }

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if ( passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs)
        }, threshold - passed);
      }
    }
  }

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

/* harmony default export */ const helpers_throttle = (throttle);

;// ./node_modules/axios/lib/helpers/progressEventReducer.js




const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = helpers_speedometer(50, 250);

  return helpers_throttle(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };

    listener(data);
  }, freq);
}

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
}

const asyncDecorator = (fn) => (...args) => utils.asap(() => fn(...args));

;// ./node_modules/axios/lib/helpers/isURLSameOrigin.js


/* harmony default export */ const isURLSameOrigin = (platform.hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
  url = new URL(url, platform.origin);

  return (
    origin.protocol === url.protocol &&
    origin.host === url.host &&
    (isMSIE || origin.port === url.port)
  );
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true);

;// ./node_modules/axios/lib/helpers/cookies.js



/* harmony default export */ const cookies = (platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils.isString(path) && cookie.push('path=' + path);

      utils.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  });


;// ./node_modules/axios/lib/helpers/isAbsoluteURL.js


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

;// ./node_modules/axios/lib/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

;// ./node_modules/axios/lib/core/buildFullPath.js





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

;// ./node_modules/axios/lib/core/mergeConfig.js





const headersToObject = (thing) => thing instanceof core_AxiosHeaders ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, prop, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, prop , caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, prop , caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, prop , caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b , prop) => mergeDeepProperties(headersToObject(a), headersToObject(b),prop, true)
  };

  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

;// ./node_modules/axios/lib/helpers/resolveConfig.js









/* harmony default export */ const resolveConfig = ((config) => {
  const newConfig = mergeConfig({}, config);

  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

  newConfig.headers = headers = core_AxiosHeaders.from(headers);

  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }

  let contentType;

  if (utils.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
});


;// ./node_modules/axios/lib/adapters/xhr.js











const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const xhr = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = core_AxiosHeaders.from(_config.headers).normalize();
    let {responseType, onUploadProgress, onDownloadProgress} = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;

    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }

    let request = new XMLHttpRequest();

    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = core_AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || defaults_transitional;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new core_AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      ([downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true));
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      ([uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress));

      request.upload.addEventListener('progress', uploadThrottled);

      request.upload.addEventListener('loadend', flushUpload);
    }

    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(_config.url);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});

;// ./node_modules/axios/lib/helpers/composeSignals.js




const composeSignals = (signals, timeout) => {
  const {length} = (signals = signals ? signals.filter(Boolean) : []);

  if (timeout || length) {
    let controller = new AbortController();

    let aborted;

    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof core_AxiosError ? err : new cancel_CanceledError(err instanceof Error ? err.message : err));
      }
    }

    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new core_AxiosError(`timeout ${timeout} of ms exceeded`, core_AxiosError.ETIMEDOUT))
    }, timeout)

    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    }

    signals.forEach((signal) => signal.addEventListener('abort', onabort));

    const {signal} = controller;

    signal.unsubscribe = () => utils.asap(unsubscribe);

    return signal;
  }
}

/* harmony default export */ const helpers_composeSignals = (composeSignals);

;// ./node_modules/axios/lib/helpers/trackStream.js

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
}

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
}

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
}

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  }

  return new ReadableStream({
    async pull(controller) {
      try {
        const {done, value} = await iterator.next();

        if (done) {
         _onFinish();
          controller.close();
          return;
        }

        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
}

;// ./node_modules/axios/lib/adapters/fetch.js










const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
);

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false
  }
}

const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;

  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    },
  }).headers.has('Content-Type');

  return duplexAccessed && !hasContentType;
});

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const supportsResponseStream = isReadableStreamSupported &&
  test(() => utils.isReadableStream(new Response('').body));


const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};

isFetchSupported && (((res) => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = utils.isFunction(res[type]) ? (res) => res[type]() :
      (_, config) => {
        throw new core_AxiosError(`Response type '${type}' is not supported`, core_AxiosError.ERR_NOT_SUPPORT, config);
      })
  });
})(new Response));

const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }

  if(utils.isBlob(body)) {
    return body.size;
  }

  if(utils.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: 'POST',
      body,
    });
    return (await _request.arrayBuffer()).byteLength;
  }

  if(utils.isArrayBufferView(body) || utils.isArrayBuffer(body)) {
    return body.byteLength;
  }

  if(utils.isURLSearchParams(body)) {
    body = body + '';
  }

  if(utils.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
}

const resolveBodyLength = async (headers, body) => {
  const length = utils.toFiniteNumber(headers.getContentLength());

  return length == null ? getBodyLength(body) : length;
}

/* harmony default export */ const adapters_fetch = (isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = resolveConfig(config);

  responseType = responseType ? (responseType + '').toLowerCase() : 'text';

  let composedSignal = helpers_composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);

  let request;

  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
  });

  let requestContentLength;

  try {
    if (
      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
    ) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });

      let contentTypeHeader;

      if (utils.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader)
      }

      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );

        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }

    if (!utils.isString(withCredentials)) {
      withCredentials = withCredentials ? 'include' : 'omit';
    }

    // Cloudflare Workers throws when credentials are defined
    // see https://github.com/cloudflare/workerd/issues/902
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });

    let response = await fetch(request);

    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

    if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
      const options = {};

      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });

      const responseContentLength = utils.toFiniteNumber(response.headers.get('content-length'));

      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];

      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }

    responseType = responseType || 'text';

    let responseData = await resolvers[utils.findKey(resolvers, responseType) || 'text'](response, config);

    !isStreamResponse && unsubscribe && unsubscribe();

    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: core_AxiosHeaders.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      })
    })
  } catch (err) {
    unsubscribe && unsubscribe();

    if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
      throw Object.assign(
        new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      )
    }

    throw core_AxiosError.from(err, err && err.code, config, request);
  }
}));



;// ./node_modules/axios/lib/adapters/adapters.js






const knownAdapters = {
  http: helpers_null,
  xhr: xhr,
  fetch: adapters_fetch
}

utils.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils.isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ const adapters = ({
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new core_AxiosError(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new core_AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});

;// ./node_modules/axios/lib/core/dispatchRequest.js









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new cancel_CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = core_AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = core_AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

;// ./node_modules/axios/lib/env/data.js
const VERSION = "1.7.9";
;// ./node_modules/axios/lib/helpers/validator.js





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new core_AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        core_AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

validators.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  }
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const validator = ({
  assertOptions,
  validators
});

;// ./node_modules/axios/lib/core/Axios.js











const Axios_validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new core_InterceptorManager(),
      response: new core_InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};

        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: Axios_validators.function,
          serialize: Axios_validators.function
        }, true);
      }
    }

    validator.assertOptions(config, {
      baseUrl: Axios_validators.spelling('baseURL'),
      withXsrfToken: Axios_validators.spelling('withXSRFToken')
    }, true);

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const core_Axios = (Axios);

;// ./node_modules/axios/lib/cancel/CancelToken.js




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new cancel_CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const cancel_CancelToken = (CancelToken);

;// ./node_modules/axios/lib/helpers/spread.js


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

;// ./node_modules/axios/lib/helpers/isAxiosError.js




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

;// ./node_modules/axios/lib/helpers/HttpStatusCode.js
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const helpers_HttpStatusCode = (HttpStatusCode);

;// ./node_modules/axios/lib/axios.js




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new core_Axios(defaultConfig);
  const instance = bind(core_Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, core_Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(lib_defaults);

// Expose Axios class to allow class inheritance
axios.Axios = core_Axios;

// Expose Cancel & CancelToken
axios.CanceledError = cancel_CanceledError;
axios.CancelToken = cancel_CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = helpers_toFormData;

// Expose AxiosError class
axios.AxiosError = core_AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = core_AxiosHeaders;

axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = helpers_HttpStatusCode;

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const lib_axios = (axios);

;// ./src/utils/getCoordinates.js
function getCoordinates() {
  return new Promise(resolve => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        if (!JSON.parse(localStorage.getItem("city-country"))) {
          const {
            longitude,
            latitude
          } = position.coords;
          localStorage.setItem("city-country", JSON.stringify([{
            lat: latitude,
            long: longitude
          }]));
          resolve({
            longitude,
            latitude
          });
        } else if (JSON.parse(localStorage.getItem("city-country")).length > 0) {
          resolve({
            longitude: JSON.parse(localStorage.getItem("city-country"))[0].long,
            latitude: JSON.parse(localStorage.getItem("city-country"))[0].lat
          });
        }
      }, err => {
        console.error(err);
      });
    }
  });
}
;// ./src/utils/getCurrentCity.js


async function getCurrentCity() {
  if (!JSON.parse(localStorage.getItem("city-country"))) {
    getCoordinates();
  }
  try {
    const coordinates = JSON.parse(localStorage.getItem("city-country"))[0];
    console.log("coordinates", coordinates);
    if (!coordinates) return null;
    const response = await lib_axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.lat}&lon=${coordinates.long}&zoom=18&addressdetails=1`);
    const {
      city,
      country
    } = response.data.address;
    return {
      city,
      country
    };
  } catch (error) {
    console.error("Ошибка при получении города:", error);
    return "Не найдено( Дайте разрешение браузеру";
  }
}
;// ./src/components/input-send-files-messages/InputSendFilesMessages.js










class InputSendFilesMessages {
  constructor(parentEl, api, alreadyMessages, chatContainer, stateApp) {
    this.parentEl = parentEl;
    this.api = api;
    this.alreadyMessages = alreadyMessages;
    this.chatContainer = chatContainer;
    this.stateApp = stateApp;
    this.userId = this.stateApp.load().id;
    this.onEnterSendMessage = this.onEnterSendMessage.bind(this);
    this.onChangeFiles = this.onChangeFiles.bind(this);
  }
  bindToDOM() {
    (async () => this.city = await getCurrentCity().then(data => data.city && data.country ? `${data.city}, ${data.country}` : data))();
    this.body = document.querySelector("body");
    this.sendMessageContainer = new Div({
      class: "send-message-container"
    }).element;
    this.sendMessageInput = new Input({
      class: "send-message",
      type: "text",
      placeholder: "Напишите сообщение..."
    }).element;
    this.sendMessageContainer.appendChild(this.sendMessageInput);
    this.containerActionsFiles = new Div({
      class: "container-files"
    }).element;
    this.formFiles = new Form({
      class: "form-files"
    }).element;
    this.placeDND = new Paragraph({
      class: "place-dnd",
      text: "Переместите сюда файлы"
    }).element;
    this.inputFiles = new Input({
      class: "input-files",
      type: "file",
      name: "file"
    }).element;
    this.inputFiles.multiple = true;
    this.buttonCloseFile = new Button({
      class: "close-file-btn",
      type: "button",
      text: "Отмена"
    }).element;
    this.buttonSubmit = new Button({
      class: "send-file-btn",
      type: "submit",
      text: "Отправить)"
    }).element;
    this.formFiles.append(this.placeDND, this.containerActionsFiles);
    this.containerСhoiceFiles = new Div({
      class: "container-choice-files"
    }).element;
    this.styleWrapperFiles = new Span({
      class: "style-wrapper-files",
      text: "Выбрать файлы..."
    }).element;
    this.containerСhoiceFiles.append(this.inputFiles, this.styleWrapperFiles);
    this.containerActionsFiles.append(this.buttonCloseFile, this.containerСhoiceFiles, this.buttonSubmit);
    this.containerAddFiles = new Div({
      class: "container-add-files"
    }).element;
    this.buttonAddFiles = new Button({
      class: "btn-add-files",
      type: "button",
      text: ""
    }).element;
    this.containerAddFiles.append(this.buttonAddFiles);
    this.sendMessageContainer.appendChild(this.containerAddFiles);
    this.parentEl.append(this.sendMessageContainer);
  }
  subscribeToEvents() {
    this.sendMessageInput.addEventListener("keyup", e => {
      if (e.code === "Enter") {
        this.onEnterSendMessage(e);
      }
    });
    this.buttonAddFiles.addEventListener("click", this.toggleFileSend.bind(this));
    this.buttonCloseFile.addEventListener("click", this.toggleFileSend.bind(this));
    ["dragover", "drop"].forEach(function (event) {
      document.addEventListener(event, function (evt) {
        evt.preventDefault();
        return false;
      });
    });
    this.placeDND.addEventListener("dragenter", function () {
      this.placeDND.classList.add("_active");
    }.bind(this));
    this.placeDND.addEventListener("dragleave", function () {
      this.placeDND.classList.remove("_active");
    }.bind(this));
    this.placeDND.addEventListener("drop", function (event) {
      this.placeDND.classList.remove("_active");
      this.files = [];
      this.files.push(...event.dataTransfer.files);
      const viewingSelectedFiles = new ViewingSelectedFiles(this.previewFilesContainer, this.inputFiles, this.files);
      if (this.files.length < 6) {
        viewingSelectedFiles.bindToDOM();
        this.formFiles.addEventListener("submit", e => {
          this.onChangeFiles(e, this.files);
        });
      }
      if (this.files.length > 5) {
        console.error("Максимум для отправки 5 файлов");
        this.files = [];
        if ([...document.querySelectorAll(".preview-file-container")].length > 0) {
          [...document.querySelectorAll(".preview-file-container")].forEach(elem => {
            elem.remove();
          });
        }
        this.files.push(...event.dataTransfer.files);
      }
    }.bind(this));
    this.inputFiles.addEventListener("change", () => {
      this.files = [];
      this.files.push(...this.inputFiles.files);
      const viewingSelectedFiles = new ViewingSelectedFiles(this.previewFilesContainer, this.inputFiles, this.files);
      if (this.files.length < 6) {
        viewingSelectedFiles.bindToDOM();
        this.formFiles.addEventListener("submit", e => {
          this.onChangeFiles(e, this.files);
        });
      }
      if (this.files.length > 5) {
        const widgetTooltip = new WidgetTooltip(this.inputFiles);
        widgetTooltip.actionTooltip("Максимум для отправки 5 файлов");
        console.error("Максимум для отправки 5 файлов");
        this.files = [];
        if ([...document.querySelectorAll(".preview-file-container")].length > 0) {
          [...document.querySelectorAll(".preview-file-container")].forEach(elem => {
            elem.remove();
          });
        }
        this.files.push(...this.inputFiles.files);
      }
    });
  }
  setListMediaFiles(listMediaFiles, mainWebsocket) {
    this.listMediaFiles = listMediaFiles;
    this.mainWebsocket = mainWebsocket;
  }
  onEnterSendMessage(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    this.api.createMessage({
      userId: this.userId,
      id: id,
      message: e.target.value,
      city: this.city
    }, message => {
      if (message.status == "ok") {
        console.log(message.message);
        if (message.messageUser && message.messageBot) {
          this.count += 2;
          this.alreadyMessages.unshift(message.messageUser.id);
          this.alreadyMessages.unshift(message.messageBot.id);
          this.listMediaFiles.rewriteAlreadyMessagesInCurrentTab(this.alreadyMessages);
          this.mainWebsocket.sendInWebsocket("text", {
            date: message.messageUser.date,
            userId: this.userId,
            id: message.messageUser.id,
            message: message.messageUser.message,
            city: this.city,
            pin: false,
            type: message.messageUser.type
          });
          this.mainWebsocket.sendInWebsocket("text", {
            date: message.messageBot.date,
            userId: this.userId,
            id: message.messageBot.id,
            message: message.messageBot.message,
            city: message.messageBot.city,
            pin: false,
            type: message.messageBot.type
          });
        } else {
          this.count++;
          this.alreadyMessages.unshift(message.messageUser.id);
          this.listMediaFiles.rewriteAlreadyMessagesInCurrentTab(this.alreadyMessages);
          this.mainWebsocket.sendInWebsocket("text", {
            date: message.messageUser.date,
            userId: this.userId,
            id: message.messageUser.id,
            message: message.messageUser.message,
            city: this.city,
            pin: false,
            type: message.messageUser.type
          });
        }
      } else {
        console.error(message.message);
      }
    });
    e.target.value = "";
  }
  async onChangeFiles(e, files) {
    e.preventDefault();
    this.loader = new Loader({
      class: "loader"
    }).element;
    this.body.appendChild(this.loader);
    if (files.length > 1) {
      files.forEach(file => {
        const id = crypto.randomUUID();
        const formData = new FormData();
        formData.append("userId", this.userId);
        formData.append("file", file);
        formData.append("city", this.city);
        formData.append("id", id);
        this.api.sendFile(formData, data => {
          if (data.status == "ok") {
            console.log(data.message);
            this.mainWebsocket.sendInWebsocket("file", {
              date: data.file.date,
              userId: this.userId,
              id: data.file.id,
              type: data.file.type,
              src: data.file.src,
              city: this.city,
              pin: false,
              name: data.file.name
            });
            this.loader.remove();
            this.alreadyMessages.unshift(data.file.id);
            this.listMediaFiles.rewriteAlreadyMessagesInCurrentTab(this.alreadyMessages);
            this.inputFiles.value = "";
            this.formFiles.reset();
            this.toggleFileSend();
            this.files = [];
            if ([...document.querySelectorAll(".preview-files-container")].length > 0) {
              [...document.querySelectorAll(".preview-files-container")].forEach(elem => {
                elem.remove();
              });
            }
            this.files = [];
          } else {
            console.error(data.message);
            this.loader.remove();
            const widgetTooltip = new WidgetTooltip(this.inputFiles);
            widgetTooltip.actionTooltip(data.message);
            this.inputFiles.value = "";
            this.formFiles.reset();
            this.files = [];
            if ([...document.querySelectorAll(".preview-file-container")].length > 0) {
              [...document.querySelectorAll(".preview-file-container")].forEach(elem => {
                elem.remove();
              });
            }
            const viewingSelectedFiles = new ViewingSelectedFiles(this.previewFilesContainer, this.inputFiles, this.files);
            viewingSelectedFiles.bindToDOM();
          }
        });
      });
    } else {
      const id = crypto.randomUUID();
      const formData = new FormData();
      formData.append("userId", this.userId);
      formData.append("file", files[0]);
      formData.append("city", this.city);
      formData.append("id", id);
      this.api.sendFile(formData, data => {
        if (data.status == "ok") {
          console.log(data.message);
          this.mainWebsocket.sendInWebsocket("file", {
            date: data.file.date,
            userId: this.userId,
            id: data.file.id,
            type: data.file.type,
            src: data.file.src,
            city: this.city,
            pin: false,
            name: data.file.name
          });
          this.alreadyMessages.unshift(data.file.id);
          this.loader.remove();
          this.listMediaFiles.rewriteAlreadyMessagesInCurrentTab(this.alreadyMessages);
          this.inputFiles.value = "";
          this.formFiles.reset();
          this.toggleFileSend();
          this.files = [];
          if ([...document.querySelectorAll(".preview-files-container")].length > 0) {
            [...document.querySelectorAll(".preview-files-container")].forEach(elem => {
              elem.remove();
            });
          }
        } else {
          console.error(data.message);
          this.loader.remove();
          const widgetTooltip = new WidgetTooltip(this.inputFiles);
          widgetTooltip.actionTooltip(data.message);
          this.inputFiles.value = "";
          this.formFiles.reset();
          this.files = [];
          if ([...document.querySelectorAll(".preview-file-container")].length > 0) {
            [...document.querySelectorAll(".preview-file-container")].forEach(elem => {
              elem.remove();
            });
          }
          const viewingSelectedFiles = new ViewingSelectedFiles(this.previewFilesContainer, this.inputFiles, this.files);
          viewingSelectedFiles.bindToDOM();
        }
      });
    }
  }
  toggleFileSend() {
    if (document.querySelector(".send-message-container") && !document.querySelector(".form-files")) {
      document.querySelector(".send-message-container").remove();
      this.chatContainer.append(this.formFiles);
      const listHistoryFiles = [...document.querySelectorAll(".file-name-text-btn")];
      listHistoryFiles.forEach(elem => {
        elem.disabled = true;
      });
      this.previewFilesContainer = new Div({
        class: "preview-files-container"
      }).element;
      this.previewFilesContainer.style.bottom = `${this.inputFiles.clientHeight + 30}px`;
      this.formFiles.appendChild(this.previewFilesContainer);
    } else {
      if ([...document.querySelectorAll(".preview-files-container")].length > 0) {
        [...document.querySelectorAll(".preview-files-container")].forEach(elem => {
          elem.remove();
        });
      }
      const listHistoryFiles = [...document.querySelectorAll(".file-name-text-btn")];
      listHistoryFiles.forEach(elem => {
        elem.disabled = false;
      });
      this.files = [];
      document.querySelector(".form-files").remove();
      this.chatContainer.append(this.sendMessageContainer);
    }
  }
}
;// ./src/components/header/Header.js





class Header {
  constructor(parentEl, api, stateApp) {
    this.parentEl = parentEl;
    this.api = api;
    this.stateApp = stateApp;
  }
  bindToDOM() {
    this.userName = this.stateApp.load();
    this.header = new Div({
      class: "header"
    }).element;
    this.headerBurgerLogo = new Div({
      class: "header-burger-logo"
    }).element;
    this.headerBurger = new Span({
      class: "header-burger"
    }).element;
    this.headerLogo = new Span({
      class: "header-logo",
      text: "OurTelegram"
    }).element;
    this.headerBurgerLogo.append(this.headerBurger, this.headerLogo);
    this.headerUserStatusContainer = new Div({
      class: "user-status-container"
    }).element;
    this.headerNameUser = new Span({
      class: "name-user",
      text: this.userName.name
    }).element;
    this.headerFriendStatus = new Paragraph({
      class: "header-status",
      text: this.userName.status
    }).element;
    this.headerUserStatusContainer.append(this.headerNameUser, this.headerFriendStatus);
    this.btnExit = new Button({
      class: "btn-exit",
      text: "Выйти"
    }).element;
    this.header.append(this.headerBurgerLogo, this.headerUserStatusContainer, this.btnExit);
    this.parentEl.appendChild(this.header);
    this.headerLogo.addEventListener("click", this.goToAllMessages.bind(this));
  }
  goToAllMessages() {
    localStorage.setItem("currentTab", JSON.stringify({
      currentTab: "allMessages"
    }));
    addingActiveTabForText("file-name-info-element", "allMessages");
    location.reload();
  }
  subscribeToEvents() {
    if (this.historyFilesContainer) {
      this.headerBurger.addEventListener("click", this.toggleMediaBlock.bind(this));
    }
    this.btnExit.addEventListener("click", this.exitUser.bind(this));
  }
  exitUser() {
    console.log(this.api);
    this.api.exitUser({
      id: this.userName.id
    }, data => {
      if (data.status == "ok") {
        localStorage.removeItem("user");
        localStorage.removeItem("currentTab");
        location.reload();
      } else {
        console.error(data.message);
      }
    });
  }
  toggleMediaBlock() {
    this.historyFilesContainer.classList.toggle("history-files-container_hidden");
    if (document.querySelector(".history-files-container_hidden")) {
      if (document.querySelector(".pin-message-container")) document.querySelector(".pin-message-container").style.maxWidth = "97.8%";
      document.querySelector(".send-message-container").style.maxWidth = "97.8%";
    } else {
      if (document.querySelector(".pin-message-container")) document.querySelector(".pin-message-container").style.maxWidth = "calc(100% - 259.34px)";
      document.querySelector(".send-message-container").style.maxWidth = "calc(100% - 259.34px)";
    }
  }
  setHistoryFilesContainer(historyFilesContainer) {
    this.historyFilesContainer = historyFilesContainer;
  }
}
;// ./src/components/ui/Li/Li.js

class Li {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    const li = document.createElement("li");
    li.classList.add(this.params.class);
    if (this.params.id) li.id = this.params.id;
    return li;
  }
}
;// ./src/components/ui/Ul/Ul.js

class Ul {
  constructor(params) {
    this.params = params;
  }
  get element() {
    return this.createElement();
  }
  createElement() {
    this.ul = document.createElement("ul");
    this.ul.classList.add(this.params.class);
    return this.ul;
  }
}
;// ./src/functions/addingActiveTab.js
function addingActiveTab(tabName, e) {
  if (e.target.closest("." + tabName)) {
    [...document.querySelectorAll("." + tabName)].forEach(elem => {
      elem.classList.remove(`${tabName}_active`);
    });
    e.target.closest("." + tabName).classList.add(`${tabName}_active`);
    const activeTabName = e.target.closest(".file-name-info-element_active").id;
    localStorage.setItem("currentTab", JSON.stringify({
      currentTab: activeTabName
    }));
  }
}
;// ./src/components/current-tab/CurrentTab.js
class CurrentTab {
  constructor(scrollGenerationMessages, listMessageGeneration, currentContentContainer) {
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
    this.scrollGenerationMessagesMain = new this.scrollGenerationMessagesData.scrollGenerationMessages(this.scrollGenerationMessagesData.heightScroll, this.scrollGenerationMessagesData.ListMessageGeneration, this.scrollGenerationMessagesData.api, this.scrollGenerationMessagesData.valuesForGeneration, this.scrollGenerationMessagesData.alreadyMessages, this.scrollGenerationMessagesData.listDifferentTypesMessages, this.scrollGenerationMessagesData.loadContentContainer);
    this.scrollGenerationMessagesMain.bindToDOM();
    this.listMessageGenerationMain = new this.listMessageGenerationData.listMessageGeneration(this.listMessageGenerationData.api, this.listMessageGenerationData.valuesForGeneration, this.listMessageGenerationData.alreadyMessages, this.listMessageGenerationData.listDifferentTypesMessages, this.listMessageGenerationData.loadContentContainer);
    this.listMessageGenerationMain.bindToDOM();
  }
  rewriteAlreadyMessages(alreadyMessages) {
    this.removeInstanceScrollGenerationMessagesMain();
    this.scrollGenerationMessagesMain = new this.scrollGenerationMessagesData.scrollGenerationMessages(this.scrollGenerationMessagesData.heightScroll, this.scrollGenerationMessagesData.ListMessageGeneration, this.scrollGenerationMessagesData.api, this.scrollGenerationMessagesData.valuesForGeneration, alreadyMessages, this.scrollGenerationMessagesData.listDifferentTypesMessages, this.scrollGenerationMessagesData.loadContentContainer);
    this.scrollGenerationMessagesMain.bindToDOM();
  }
  removeInstanceScrollGenerationMessagesMain() {
    if (this.scrollGenerationMessagesMain) {
      this.scrollGenerationMessagesMain.removeScroll();
    }
  }
}
;// ./src/components/scroll-generation-messages/ScrollGenerationMessages.js
class ScrollGenerationMessages {
  constructor(scrollHeight, listMessageGeneration, api, valuesForGeneration, alreadyMessages, listDifferentTypesMessages, parentEl) {
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
    if (window.innerHeight + window.pageYOffset + this.scrollHeight < document.documentElement.scrollHeight && !this.unblocking) {
      console.log("Прокрутка достигла начало страницы!");
      this.unblocking = true;
      this.valuesForGeneration.page += 1;
      setTimeout(() => {
        const listMessageGeneration = new this.listMessageGeneration(this.api, this.valuesForGeneration, this.alreadyMessages, this.listDifferentTypesMessages, this.parentEl);
        listMessageGeneration.bindToDOM();
        this.unblocking = false;
      }, 0);
    }
  }
  removeScroll() {
    window.removeEventListener("scroll", this.scrollListener);
  }
}
;// ./src/components/list-message-generation/ListMessageGeneration.js

class ListMessageGeneration {
  constructor(api, valuesForGeneration, alreadyMessages, listDifferentTypesMessages, parentEl) {
    this.api = api;
    this.valuesForGeneration = valuesForGeneration;
    this.alreadyMessages = alreadyMessages;
    this.listDifferentTypesMessages = listDifferentTypesMessages;
    this.parentEl = parentEl;
  }
  bindToDOM() {
    this.body = document.querySelector("body");
    this.loader = new Loader({
      class: "loader"
    }).element;
    this.body.appendChild(this.loader);
    this.api.messages(messages => {
      if (messages.messages.length == 0) {
        this.loader.remove();
      }
      if (messages.status == "ok") {
        console.log(messages.message);
        this.loader.remove();
        if (messages.messages) {
          messages.messages.forEach(message => {
            if (!message.messageBot) {
              if (this.alreadyMessages?.includes(message?.id)) {
                console.log("Этот элемент уже добален");
                this.valuesForGeneration.count++;
              }
              if (message?.type == "link") {
                const linkMessage = new this.listDifferentTypesMessages.linkMessage(this.parentEl, message);
                linkMessage.bindToDOM();
              } else if (message?.type == "different") {
                const textMessage = new this.listDifferentTypesMessages.textMessage(this.parentEl, message);
                textMessage.bindToDOM();
              } else if (message?.type.includes("image")) {
                const imageMessage = new this.listDifferentTypesMessages.imageMessage(this.parentEl, message);
                imageMessage.bindToDOM();
              } else if (message?.type.includes("video")) {
                const videoMessage = new this.listDifferentTypesMessages.videoMessage(this.parentEl, message);
                videoMessage.bindToDOM();
              } else if (message?.type.includes("audio")) {
                const audioMessage = new this.listDifferentTypesMessages.audioMessage(this.parentEl, message);
                audioMessage.bindToDOM();
              } else if (message?.type.includes("application")) {
                const fileMessage = new this.listDifferentTypesMessages.fileMessage(this.parentEl, message, true);
                fileMessage.bindToDOM();
              }
            } else {
              if (this.alreadyMessages?.includes(message.messageUser?.id) || this.alreadyMessages?.includes(message.messageBot?.id)) {
                console.log("Этот элемент уже добален");
                this.valuesForGeneration.count++;
              }
              if (message.messageUser?.type == "link") {
                const linkMessage = new this.listDifferentTypesMessages.linkMessage(this.parentEl, message.messageUser);
                linkMessage.bindToDOM();
              } else if (message.messageUser?.type == "different") {
                const textMessage = new this.listDifferentTypesMessages.textMessage(this.parentEl, message.messageUser);
                textMessage.bindToDOM();
              } else if (message.messageBot) {
                const textMessage = new this.listDifferentTypesMessages.textMessage(this.parentEl, message.messageBot);
                textMessage.bindToDOM();
              }
            }
          });
        }
      } else {
        console.error(messages.message);
      }
    }, this.valuesForGeneration.count, this.valuesForGeneration.page, this.valuesForGeneration.userId, this.valuesForGeneration.size, this.valuesForGeneration.category);
  }
}
;// ./src/components/list-mediafiles/ListMediaFile.js














class ListMediaFile {
  constructor(parentEl, api, data, fileNameInfoName, loadContentContainer, currentContentContainer, stateApp) {
    this.parentEl = parentEl;
    this.api = api;
    if (Array.isArray(data)) {
      this._data = data;
    } else {
      throw new Error("Список названий медиафайлов и количества их должен быть массивом(");
    }
    this.fileNameInfoName = fileNameInfoName;
    this.loadContentContainer = loadContentContainer;
    this.currentContentContainer = currentContentContainer;
    this.stateApp = stateApp;
    this.userId = this.stateApp.load().id;
  }
  get data() {
    return this._data;
  }
  bindToDOM(sendMessageContainer) {
    this.sendMessageContainer = sendMessageContainer;
    this.listHistoryFiles = new Ul({
      class: "list-history-files"
    }).element;
    this.data.forEach(mediaFilesNames => {
      const li = new Li({
        class: "file-name-info-element",
        id: mediaFilesNames.nameEng
      }).element;
      const fileNameTextBtn = new Button({
        class: "file-name-text-btn",
        text: mediaFilesNames.nameRus,
        type: "button"
      }).element;
      const fileNameCount = new Span({
        class: "file-name-count",
        text: 0
      }).element;
      this.api.getCatagories(mediaFilesNames.nameEng, this.userId, catagory => {
        if (catagory.status == "ok") {
          console.log(catagory.message);
          fileNameCount.textContent = catagory.catagory.length;
        } else {
          fileNameCount.textContent = 0;
          console.log(catagory.message);
        }
      });
      li.append(fileNameTextBtn, fileNameCount);
      this.listHistoryFiles.appendChild(li);
    });
    this.parentEl.appendChild(this.listHistoryFiles);
    this.listHistoryFiles.addEventListener("click", this.goingPage.bind(this));
  }
  goingPage(e) {
    if (e.target.closest("." + this.fileNameInfoName)) {
      addingActiveTab(this.fileNameInfoName, e);
      this.checkMainTab();
    }
  }
  checkMainTab() {
    this.currentTab = JSON.parse(localStorage.getItem("currentTab")).currentTab;
    if (this.listHistoryFiles.querySelector("." + this.fileNameInfoName + "_active")) {
      const nameActiveTag = this.listHistoryFiles.querySelector("." + this.fileNameInfoName + "_active").querySelector(".file-name-text-btn").textContent;
      this.count = 0;
      let size = 10;
      let page = 1;
      if (this.currentTabClass) {
        this.currentTabClass.removeInstanceScrollGenerationMessagesMain();
      }
      this.currentTabClass = new CurrentTab({
        scrollGenerationMessages: ScrollGenerationMessages,
        heightScroll: 20,
        ListMessageGeneration: ListMessageGeneration,
        api: this.api,
        valuesForGeneration: {
          count: this.count,
          page: page,
          size: size,
          category: this.currentTab,
          userId: this.userId
        },
        alreadyMessages: this.alreadyMessages,
        listDifferentTypesMessages: {
          linkMessage: LinkMessage,
          textMessage: TextMessage,
          imageMessage: ImageMessage,
          videoMessage: VideoMessage,
          audioMessage: AudioMessage,
          fileMessage: FileMessage
        },
        loadContentContainer: this.loadContentContainer
      }, {
        listMessageGeneration: ListMessageGeneration,
        api: this.api,
        valuesForGeneration: {
          count: this.count,
          page: page,
          size: size,
          category: this.currentTab,
          userId: this.userId
        },
        alreadyMessages: this.alreadyMessages,
        listDifferentTypesMessages: {
          linkMessage: LinkMessage,
          textMessage: TextMessage,
          imageMessage: ImageMessage,
          videoMessage: VideoMessage,
          audioMessage: AudioMessage,
          fileMessage: FileMessage
        },
        loadContentContainer: this.loadContentContainer
      }, this.currentContentContainer);
      this.currentTabClass.bindToDOM();
      if (nameActiveTag == "Избранное") {
        this.sendMessageContainer.classList.add("send-message-container_hidden");
      } else if (nameActiveTag == "Ссылки") {
        this.sendMessageContainer.classList.add("send-message-container_hidden");
      } else if (nameActiveTag == "Изображения") {
        this.sendMessageContainer.classList.add("send-message-container_hidden");
      } else if (nameActiveTag == "Видео") {
        this.sendMessageContainer.classList.add("send-message-container_hidden");
      } else if (nameActiveTag == "Аудио") {
        this.sendMessageContainer.classList.add("send-message-container_hidden");
      } else if (nameActiveTag == "Файлы") {
        this.sendMessageContainer.classList.add("send-message-container_hidden");
      } else if (nameActiveTag == "Все сообщения") {
        this.sendMessageContainer.classList.remove("send-message-container_hidden");
      }
    }
  }
  rewriteAlreadyMessagesInCurrentTab(alreadyMessages) {
    if (this.currentTabClass) {
      this.currentTabClass.rewriteAlreadyMessages(alreadyMessages);
    }
  }
}
;// ./src/components/history-names-files/HistoryNamesFiles.js



class HistoryNamesFiles {
  constructor(parentEl, api, data, fileNameInfoName, loadContentContainer, currentContentContainer, stateApp) {
    this.parentEl = parentEl;
    this.api = api;
    if (Array.isArray(data)) {
      this.data = data;
    } else {
      throw new Error("Список названий медиафайлов и количества их должен быть массивом(");
    }
    this.fileNameInfoName = fileNameInfoName;
    this.loadContentContainer = loadContentContainer;
    this.currentContentContainer = currentContentContainer;
    this.stateApp = stateApp;
  }
  bindToDOM() {
    this.historyFilesContainer = new Div({
      class: "history-files-container"
    }).element;
    this.titleHistoryFiles = new Heading({
      class: "title-history-files",
      text: "Медиафайлы",
      level: 2
    }).element;
    this.historyFilesContainer.appendChild(this.titleHistoryFiles);
    this.parentEl.appendChild(this.historyFilesContainer);
    this.listMediaFiles = new ListMediaFile(this.historyFilesContainer, this.api, this.data, this.fileNameInfoName, this.loadContentContainer, this.currentContentContainer, this.stateApp);
  }
  getListMediaFiles() {
    if (this.listMediaFiles) return this.listMediaFiles;
  }
  bindToDOMListMediaFiles(sendMessageContainer) {
    this.listMediaFiles.bindToDOM(sendMessageContainer);
  }
}
;// ./src/utils/getCurrentTab.js
function getCurrentTab() {
  if (!JSON.parse(localStorage.getItem("currentTab"))) {
    localStorage.setItem("currentTab", JSON.stringify({
      currentTab: "allMessages"
    }));
    return JSON.parse(localStorage.getItem("currentTab")).currentTab;
  } else {
    return JSON.parse(localStorage.getItem("currentTab")).currentTab;
  }
}
;// ./src/components/full-app/FullApp.js



















class FullApp {
  constructor(url, parentEl, stateApp, listNamesMessages, loader) {
    this.url = url;
    this.parentEl = parentEl;
    this.stateApp = stateApp;
    this.websocket = null;
    this.url = url;
    this.api = new ChatAPI(this.url);
    this.listNamesMessages = listNamesMessages;
    this.loader = loader;
    this.alreadyMessages = [];
    this.urlWS = this.url.replace("https:", "wss:");
  }
  async init() {
    this.bindToDOM();
  }
  async bindToDOM() {
    this.currentTab = getCurrentTab();
    this.header = new Header(this.parentEl, this.api, this.stateApp, this.currentTab);
    this.mainViewContainer = new Div({
      class: "main-view-container"
    }).element;
    this.chatContainer = new Div({
      class: "chat-container"
    }).element;
    this.contentContainer = new Div({
      class: "content-container"
    }).element;
    this.loadContentContainer = new Div({
      class: "load-content-container"
    }).element;
    this.contentContainer.appendChild(this.loadContentContainer);
    this.currentContentContainer = new Div({
      class: "current-content-container"
    }).element;
    this.contentContainer.appendChild(this.currentContentContainer);
    this.chatContainer.append(this.contentContainer);
    this.historyNamesFiles = new HistoryNamesFiles(this.mainViewContainer, this.api, this.listNamesMessages, "file-name-info-element", this.loadContentContainer, this.currentContentContainer, this.stateApp);
    this.header.bindToDOM();
    this.parentEl.append(this.mainViewContainer);
    this.inputSendFilesMessages = new InputSendFilesMessages(this.chatContainer, this.api, this.alreadyMessages, this.chatContainer, this.stateApp);
    this.inputSendFilesMessages.bindToDOM();
    this.historyNamesFiles.bindToDOM();
    this.mainWebsocket = new MainWebSocket(this.urlWS, {
      linkMessage: LinkMessage,
      textMessage: TextMessage,
      imageMessage: ImageMessage,
      videoMessage: VideoMessage,
      audioMessage: AudioMessage,
      fileMessage: FileMessage
    }, AddedNumberInCount, this.currentContentContainer, this.stateApp, this.api);
    this.mainViewContainer.append(this.chatContainer);
    this.listMediaFiles = this.historyNamesFiles.getListMediaFiles();
    this.inputSendFilesMessages.setListMediaFiles(this.listMediaFiles, this.mainWebsocket);
    this.inputSendFilesMessages.subscribeToEvents();
    this.historyNamesFiles.bindToDOMListMediaFiles(document.querySelector(".send-message-container"));
    this.listCounts = [...document.querySelectorAll(".file-name-text-btn")];
    this.mainWebsocket.subscribeOnEvents(this.listCounts, this.chatContainer);
    addingActiveTabForText("file-name-info-element", this.currentTab);
    this.listMediaFiles.checkMainTab();
    this.historyFilesContainer = this.parentEl.querySelector(".history-files-container");
    this.header.setHistoryFilesContainer(this.historyFilesContainer);
    this.header.subscribeToEvents();
    this.headerBurger = this.parentEl.querySelector(".header-burger");
    this.pinDisplay = new PinDisplay(this.chatContainer, this.api, {
      pinMessage: PinMessage,
      pinFile: PinFile
    }, this.stateApp);
    this.pinDisplay.bindToDOM();
    this.actionsWithMessage = new ActionsWithMessage(this.chatContainer, {
      pinActive: "btn-pin_active",
      pin: "btn-pin",
      favAdd: "btn-fav-add",
      favDel: "btn-fav-del",
      btnDownload: "btn-download"
    }, "pin-message-container", this.api, {
      pinMessage: PinMessage,
      pinFile: PinFile
    }, {
      videoFile: "video-file",
      audioFile: "audio-file",
      imgFile: "img-file",
      messageFileLink: "message-link-file",
      message: "message",
      messageLink: "message-link"
    }, "message-container", "file-name-text-btn", this.mainWebsocket, "actions-fav-container", this.stateApp);
    this.actionsWithMessage.subscribeToEvents();
    this.loader.remove();
  }
}
;// ./src/data/listNamesTypesMessages.json
const listNamesTypesMessages_namespaceObject = /*#__PURE__*/JSON.parse('[{"nameRus":"Все сообщения","nameEng":"allMessages"},{"nameRus":"Избранное","nameEng":"favourites"},{"nameRus":"Ссылки","nameEng":"link"},{"nameRus":"Изображения","nameEng":"image"},{"nameRus":"Видео","nameEng":"video"},{"nameRus":"Аудио","nameEng":"audio"},{"nameRus":"Файлы","nameEng":"application"}]');
;// ./src/js/app.js








const url = `${environment}/`;
const loader = new Loader({
  class: "loader"
}).element;
const body = document.querySelector("body");
body.appendChild(loader);
document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");
  const container = new Div({
    class: "container"
  }).element;
  app.appendChild(container);
  const stateApp = new StateApp();
  const fullApp = new FullApp(url, app, stateApp, listNamesTypesMessages_namespaceObject, loader);
  if (!stateApp.load()) {
    if (!JSON.parse(localStorage.getItem("page"))) {
      localStorage.setItem("page", JSON.stringify({
        page: "singInWindow"
      }));
    }
    if (JSON.parse(localStorage.getItem("page")).page == "singInWindow") {
      const singInWindow = new SignInWindow(container, stateApp, fullApp, loader, url);
      singInWindow.bindToDOM();
    } else if (JSON.parse(localStorage.getItem("page")).page == "registerInWindow") {
      const registrationWindow = new RegistrationWindow(container, stateApp, fullApp, loader, url);
      registrationWindow.bindToDOM();
    }
  } else {
    container.remove();
    fullApp.init();
  }
});
;// ./src/index.js


/******/ })()
;