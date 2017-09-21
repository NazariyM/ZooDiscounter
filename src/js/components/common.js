import './noTouch';
import { Selectric } from './selectInit';
import { Nav } from './nav';
import { Filter } from './filter';
import CTabs from './c-tabs';
import objectFitImages from 'object-fit-images';
import ionRangeSlider from 'ion-rangeslider';

/**
 * Website's common scripts.
 *
 * @module Common
 */

export class Common {
  /**
   * Cache data etc.
   */
  constructor() {
    this.messages = {
      constructor: 'COMMON: constructing...',
      init: 'COMMON: initializing...',
      test: 'COMMON: Test message!'
    };

    console.log(this.messages.constructor);
  }

  /**
   * Test method.
   */
  test() {
    console.log(this.messages.test);
  };

  /**
   * Initialize Main page scripts.
   */
  init() {
    console.log(this.messages.init);
    this.test();
    objectFitImages();
  }
}

/** tabs init */
const $tabs = $('.c-tabs');
$tabs.each((index, el) => {
  const tab = new CTabs($(el));
  tab.init();
});

/** price filter range */
const $customSelect = $('.js-select');
$customSelect.selectric();

/** price filter range */
const $rangeSlider = $('.js-filter-range');
const $resetRangeSld = $('.js-reset-range');
$rangeSlider.ionRangeSlider({
  type: 'double',
  hide_min_max: true
});
const $rangeDataReset = $rangeSlider.data('ionRangeSlider');
$resetRangeSld.on('click', function () {
  $rangeDataReset.reset();
});

/** Export initialized common scripts by default */
export default new Common().init();
