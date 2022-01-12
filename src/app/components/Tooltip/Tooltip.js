/* eslint-disable class-methods-use-this */
export default class Tooltip {
  addTooltip(targetElement) {
    const tooltip = document.createElement('div');
    const tooltipTitle = document.createElement('div');
    const tooltipContent = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltipTitle.className = 'tooltip-title';
    tooltipTitle.textContent = targetElement.dataset.originalTitle;
    tooltipContent.textContent = targetElement.dataset.content;

    document.body.appendChild(tooltip);
    tooltip.appendChild(tooltipTitle);
    tooltip.appendChild(tooltipContent);

    if (targetElement) {
      const coords = targetElement.getBoundingClientRect();
      tooltip.style.top = `${coords.top - tooltip.offsetHeight - 15}px`;
      // tooltip.style.left =
      // `${ coords.left + tooltip.offsetWidth / 2 - tooltip.offsetWidth / 2}px`;
    }
  }
}
