import Ember from 'ember';

export default Ember.Controller.extend({
   searchText: '',
   actions: {
       searchMovies() {
            
           console.log('--- action search', this.get('searchText'));
           var url = `https://api.themoviedb.org/3/search/movie?query=${this.get('searchText')}&api_key=87380c54ae472259aade42db22a24d89`;
           var self = this;
           Ember.$.getJSON(url).then(function(data){
               console.log(data);
               // transitionTo inside component is not allowed, must do it in the controller, route or view
               self.transitionToRoute('movie-list', {queryParams: {query: self.get('searchText'), category: null}});  // TODO: somehow the browser can't forget the query params, have to manually set to null
           })
       }
   }
});
