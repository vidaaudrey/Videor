import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('movie-list', {path: 'movies'}, function(){
    this.route('popular', {path: '/:category'})
  });
  this.route('about');
  this.route('movie', function(){
    this.route('index', {path: '/:id'}),
    this.route('new')
  })
});

export default Router;
