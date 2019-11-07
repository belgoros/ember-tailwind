import Controller from '@ember/controller';

export default Controller.extend({
  cities: null,
  destination: null,

  init() {
    this._super(...arguments);
    this.set('destination', 'Missouri');
    this.set('cities', ['New Mexico', 'Missouri', 'Texas', 'Lorem ipsum dolor sit amet consectetur adipisicing elit']);
  }
});
