import "./tooltip.scss";

import Heading from "../Heading/Heading";
import Div from "../Div/Div";

export default class Tooltip {
  constructor(params) {
    this.params = params;
  }

  get element() {
    return this.createElement();
  }

  createElement() {
    const tooltipPopover = new Div({
      class: [this.params.class, this.params.class + "--top"],
    }).element;
    const tooltipArrow = new Div({ class: "arrow" }).element;
    const tooltipHeading = new Heading({
      class: "tooltip-header",
      level: 3,
      text: this.params.title,
    }).element;

    tooltipPopover.role = "tooltip";
    tooltipPopover.id = this.params.id;

    tooltipPopover.append(tooltipHeading, tooltipArrow);

    return { tooltipPopover, tooltipArrow };
  }
}
