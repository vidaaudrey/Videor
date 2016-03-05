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
               // TODO: transition to the movie list page, how to pass the data?
               // transitionTo inside component is not allowed 
               self.transitionToRoute('movie-list?query=' + self.get('searchText'));
           })
       }
   }
});
