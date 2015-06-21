import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('images');
  this.resource('containers');
  this.resource('volumes');
});

export default Router;
