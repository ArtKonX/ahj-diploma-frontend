export default function setPositionTooltip(parent, tooltip, tooltipArrow) {
  const { top, left } = parent.getBoundingClientRect();

  tooltip.style.left =
    left + parent.offsetWidth / 2 - tooltip.offsetWidth / 2 + "px";
  tooltip.style.top =
    top - tooltip.offsetHeight + tooltipArrow.offsetHeight - 8 + "px";
  tooltipArrow.style.left =
    tooltip.offsetWidth / 2 - tooltipArrow.offsetWidth / 2 + "px";
}
