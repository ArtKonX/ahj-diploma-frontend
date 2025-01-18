import Div from "../ui/Div/Div";
import ChatAPI from "../../js/api/ChatAPI";

import LinkMessage from "../link-message/LinkMessage";
import TextMessage from "../text-message/TextMessage";
import ImageMessage from "../image-message/ImageMessage";
import VideoMessage from "../video-message/VideoMessage";
import AudioMessage from "../audio-message/AudioMessage";
import FileMessage from "../file-message/FileMessage";
import PinFile from "../pins/pin-file/PinFile";
import PinMessage from "../pins/pin-message/PinMessage";
import AddedNumberInCount from "../added-number-in-count/AddedNumberInCount";
import addingActiveTabForText from "../../functions/addingActiveTabForText";
import MainWebSocket from "../websocket/MainWebSocket";
import ActionsWithMessage from "../actions-with-message/ActionsWithMessage";
import PinDisplay from "../pin-display/PinDisplay";
import InputSendFilesMessages from "../input-send-files-messages/InputSendFilesMessages";
import Header from "../header/Header";
import HistoryNamesFiles from "../history-names-files/HistoryNamesFiles";
import getCurrentTab from "../../utils/getCurrentTab";

export default class FullApp {
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

        this.header = new Header(
            this.parentEl,
            this.api,
            this.stateApp,
            this.currentTab,
        );

        this.mainViewContainer = new Div({ class: "main-view-container" }).element;

        this.chatContainer = new Div({ class: "chat-container" }).element;
        this.contentContainer = new Div({ class: "content-container" }).element;

        this.loadContentContainer = new Div({
            class: "load-content-container",
        }).element;

        this.contentContainer.appendChild(this.loadContentContainer);

        this.currentContentContainer = new Div({
            class: "current-content-container",
        }).element;
        this.contentContainer.appendChild(this.currentContentContainer);
        this.chatContainer.append(this.contentContainer);

        this.historyNamesFiles = new HistoryNamesFiles(
            this.mainViewContainer,
            this.api,
            this.listNamesMessages,
            "file-name-info-element",
            this.loadContentContainer,
            this.currentContentContainer,
            this.stateApp,
        );
        this.header.bindToDOM();

        this.parentEl.append(this.mainViewContainer);

        this.inputSendFilesMessages = new InputSendFilesMessages(
            this.chatContainer,
            this.api,
            this.alreadyMessages,
            this.chatContainer,
            this.stateApp,
        );

        this.inputSendFilesMessages.bindToDOM();
        this.historyNamesFiles.bindToDOM();

        this.mainWebsocket = new MainWebSocket(
            this.urlWS,
            {
                linkMessage: LinkMessage,
                textMessage: TextMessage,
                imageMessage: ImageMessage,
                videoMessage: VideoMessage,
                audioMessage: AudioMessage,
                fileMessage: FileMessage,
            },
            AddedNumberInCount,
            this.currentContentContainer,
            this.stateApp,
            this.api,
        );

        this.mainViewContainer.append(this.chatContainer);

        this.listMediaFiles = this.historyNamesFiles.getListMediaFiles();

        this.inputSendFilesMessages.setListMediaFiles(
            this.listMediaFiles,
            this.mainWebsocket,
        );

        this.inputSendFilesMessages.subscribeToEvents();

        this.historyNamesFiles.bindToDOMListMediaFiles(
            document.querySelector(".send-message-container"),
        );

        this.listCounts = [...document.querySelectorAll(".file-name-text-btn")];
        this.mainWebsocket.subscribeOnEvents(this.listCounts, this.chatContainer);

        addingActiveTabForText("file-name-info-element", this.currentTab);

        this.listMediaFiles.checkMainTab();

        this.historyFilesContainer = this.parentEl.querySelector(
            ".history-files-container",
        );

        this.header.setHistoryFilesContainer(this.historyFilesContainer);

        this.header.subscribeToEvents();

        this.headerBurger = this.parentEl.querySelector(".header-burger");

        this.pinDisplay = new PinDisplay(
            this.chatContainer,
            this.api,
            { pinMessage: PinMessage, pinFile: PinFile },
            this.stateApp,
        );
        this.pinDisplay.bindToDOM();

        this.actionsWithMessage = new ActionsWithMessage(
            this.chatContainer,
            {
                pinActive: "btn-pin_active",
                pin: "btn-pin",
                favAdd: "btn-fav-add",
                favDel: "btn-fav-del",
                btnDownload: "btn-download",
            },
            "pin-message-container",
            this.api,
            { pinMessage: PinMessage, pinFile: PinFile },
            {
                videoFile: "video-file",
                audioFile: "audio-file",
                imgFile: "img-file",
                messageFileLink: "message-link-file",
                message: "message",
                messageLink: "message-link",
            },
            "message-container",
            "file-name-text-btn",
            this.mainWebsocket,
            "actions-fav-container",
            this.stateApp,
        );
        this.actionsWithMessage.subscribeToEvents();
        this.loader.remove();
    }
}
