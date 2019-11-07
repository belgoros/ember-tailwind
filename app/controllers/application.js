import Controller from '@ember/controller';

export default Controller.extend({
  shops: null,
  current: null,

  init() {
    this._super(...arguments);
    this.set('current', '101-London');
    this.set('shops', ['101-London', '1-Paris', '648-Villeneuve-D\'ascq', '1256-Lorem ipsum dolor sit amet consectetur adipisicing elit']);
  }
});
