import Div from "../ui/Div/Div";
import Img from "../ui/Img/Img";
import Paragraph from "../ui/Paragraph/Paragraph";
import Span from "../ui/Span/Span";
import videoImg from "../../img/icons8-avi-100.png";
import audioImg from "../../img/icons8-mp3-100.png";

export default class ViewingSelectedFiles {
  constructor(parentEl, elementTop, data) {
    this.parentEl = parentEl;
    this.elementTop = elementTop;
    this.data = data;
  }

  bindToDOM() {
    if (this.data.length > 1) {
      this.data.forEach((file) => {
        if (file.type.includes("image")) {
          const url = URL.createObjectURL(file);
          const previewFileContainer = new Div({
            class: "preview-file-container",
          }).element;
          const previewImage = new Img({
            class: "preview-image",
            src: url,
            alt: file.name,
          }).element;
          const previewText = new Paragraph({
            class: "preview-text",
            text: file.name,
          }).element;
          previewFileContainer.append(previewImage, previewText);
          this.parentEl.appendChild(previewFileContainer);
        } else if (file.type.includes("application")) {
          const previewFileContainer = new Div({
            class: "preview-file-container",
          }).element;
          const previewFile = new Span({ class: "preview-file" }).element;
          const previewText = new Paragraph({
            class: "preview-text",
            text: file.name,
          }).element;
          previewFileContainer.append(previewFile, previewText);
          this.parentEl.appendChild(previewFileContainer);
        } else if (file.type.includes("video")) {
          const previewFileContainer = new Div({
            class: "preview-file-container",
          }).element;
          const previewVideo = new Img({
            class: "preview-video",
            src: videoImg,
            alt: file.name,
          }).element;
          const previewText = new Paragraph({
            class: "preview-text",
            text: file.name,
          }).element;
          previewFileContainer.append(previewVideo, previewText);
          this.parentEl.appendChild(previewFileContainer);
        } else if (file.type.includes("audio")) {
          const previewFileContainer = new Div({
            class: "preview-file-container",
          }).element;
          const previewAudio = new Img({
            class: "preview-audio",
            src: audioImg,
            alt: file.name,
          }).element;
          const previewText = new Paragraph({
            class: "preview-text",
            text: file.name,
          }).element;
          previewFileContainer.append(previewAudio, previewText);
          this.parentEl.appendChild(previewFileContainer);
        }
      });
    } else if (this.data[0]) {
      if (this.data[0].type.includes("image")) {
        const previewFileContainer = new Div({
          class: "preview-file-container",
        }).element;
        const url = URL.createObjectURL(this.data[0]);
        const previewImage = new Img({
          class: "preview-image",
          src: url,
          alt: this.data[0].name,
        }).element;
        const previewText = new Paragraph({
          class: "preview-text",
          text: this.data[0].name,
        }).element;
        previewFileContainer.append(previewImage, previewText);
        this.parentEl.appendChild(previewFileContainer);
      } else if (this.data[0].type.includes("application")) {
        const previewFileContainer = new Div({
          class: "preview-file-container",
        }).element;
        const previewFile = new Span({ class: "preview-file" }).element;
        const previewText = new Paragraph({
          class: "preview-text",
          text: this.data[0].name,
        }).element;
        previewFileContainer.append(previewFile, previewText);
        this.parentEl.appendChild(previewFileContainer);
      } else if (this.data[0].type.includes("video")) {
        const previewFileContainer = new Div({
          class: "preview-file-container",
        }).element;
        const previewVideo = new Img({
          class: "preview-video",
          src: videoImg,
          alt: this.data[0].name,
        }).element;
        const previewText = new Paragraph({
          class: "preview-text",
          text: this.data[0].name,
        }).element;
        previewFileContainer.append(previewVideo, previewText);
        this.parentEl.appendChild(previewFileContainer);
      } else if (this.data[0].type.includes("audio")) {
        const previewFileContainer = new Div({
          class: "preview-file-container",
        }).element;
        const previewAudio = new Img({
          class: "preview-audio",
          src: audioImg,
          alt: this.data[0].name,
        }).element;
        const previewText = new Paragraph({
          class: "preview-text",
          text: this.data[0].name,
        }).element;
        previewFileContainer.append(previewAudio, previewText);
        this.parentEl.appendChild(previewFileContainer);
      }
    }

    this.parentEl.style.bottom = `${this.elementTop.clientHeight + 30}px`;
  }
}
