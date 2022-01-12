/* eslint-disable class-methods-use-this */

export default class RegisterForm {
  constructor(element, tooltipGenerator) {
    if (typeof element === 'string') {
      // eslint-disable-next-line no-param-reassign
      element = document.querySelector(element);
    }

    this.element = element;
    this.showTooltip = this.showTooltip.bind(this);
    this.element.addEventListener('click', this.showTooltip);
    // this.element.addEventListener('mouseout', this.showTooltip);
    this.tooltipGenerator = tooltipGenerator;
  }

  showTooltip(e) {
    e.preventDefault();
    if (document.querySelector('.tooltip')) {
      document.querySelector('.tooltip').remove();
    } else this.tooltipGenerator.addTooltip(this.element);
  }
}
