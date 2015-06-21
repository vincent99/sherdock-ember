import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    refresh: function() {
      this.refresh();
    },
  },

  model: function() {
    return this.get('store').rawRequest({url: 'volumes'}).then((volumes) => {
      var keys = Object.keys(volumes);
      var out = [];

      keys.forEach((key) => {
        out.push(volumes[key]);
      });

      return out;
    });
  }
});
