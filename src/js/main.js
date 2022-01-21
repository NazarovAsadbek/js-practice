import modals from "./modules/modals";
import sliders from "./modules/sliders";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordiion from "./modules/accordiion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drug from "./modules/drug";

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	modals();
	sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', 'vertical');
	mask('[name="phone"]');
	checkTextInputs('[name="name"]');
	checkTextInputs('[name="message"]');
	showMoreStyles('.button-styles', '.styles-2', '#styles .row');
	calc('#size', '#material', '#options', '.promocode', '.calc-price')
	filter();
	pictureSize('.sizes-block');
	accordiion('.accordion-heading', '.accordion-block');
	burger('.burger-menu', '.burger');
	scrolling('.pageup');
	drug();
});
