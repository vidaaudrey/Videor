import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('movie-list');
  this.route('about');
  this.route('movie', function(){
    this.route('movie-detail', {path:'/:id'}),
    this.route('movie-list', {path: '/list'})
  })
});

export default Router;
