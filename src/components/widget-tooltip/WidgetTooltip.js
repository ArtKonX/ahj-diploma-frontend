import Tooltip from "../ui/Tooltip/Tooltip";

import setPositionTooltip from "../../utils/setPositionTooltip";

export default class WidgetTooltip {
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
      tooltip,
    });
  }

  removeTooltip(id) {
    const removeEl = this.tooltips.find((el) => id === el.id);

    if (removeEl) {
      removeEl.tooltip.remove();
      this.form.removeAttribute("aria-describedby");
      this.tooltips.filter((el) => id !== el.id);
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
      id: id,
    }).element;

    this.pushTooltip(this.tooltip.tooltipPopover, id);

    document.body.appendChild(this.tooltip.tooltipPopover);

    setPositionTooltip(
      this.form,
      this.tooltip.tooltipPopover,
      this.tooltip.tooltipArrow,
    );
    this.form.setAttribute("aria-describedby", id);

    return id;
  }
}
