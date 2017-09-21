import { $window, css, Resp } from '../modules/dev/helpers';
export class Filter {
  constructor() {
    this.$filter = $('.js-filter');
    this.$openBtn = this.$filter.find('.js-filter-open');
    this.$content = this.$filter.find('.js-filter-content');

    this.init();
  }

  checkDevice() {
    $window.on('load resize', () => {
      if (Resp.isMobileAndTablet) {
        this.openFilter();
      }
    });
  }

  openFilter() {
    this.$openBtn.on('click', function () {
      $(this).next(this.$content).toggleClass(css.visible);
    });
  }

  init() {
    this.checkDevice();
  }
}

export default new Filter();