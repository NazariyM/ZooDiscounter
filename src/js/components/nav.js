import { $window, $body, css } from '../modules/dev/helpers';
export class Nav {
  constructor() {
    this.$btn = $('.js-nav-btn');
    this.$nav = $('.js-nav');
    this.init();
  }

  toggleNav() {
    this.$btn.on('click', function () {
      $(this).toggleClass(css.active);
      $(this).parent().next(this.$nav).toggleClass(css.active);
      $body.toggleClass(css.locked);
    });
  }

  onResize() {
    $window.on('resize', () => {
      this.$nav.removeClass(css.active);
      this.$btn.removeClass(css.active);
      $body.removeClass(css.locked);
    });
  }

  init() {
    this.toggleNav();
    this.onResize();
  }
}

export default new Nav();