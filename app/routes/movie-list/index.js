import Ember from 'ember';

export default Ember.Route.extend({
    model: function(param){
        
      return Ember.$.getJSON('https://api.themoviedb.org/3/discover/movie?api_key=87380c54ae472259aade42db22a24d89').then(function(data) {
            // get all the movie data and create an Array of Ember Object
            var movies = data.results.map(function(movie){
              return Ember.Object.create(movie);
            } );
            // for testing, print out the first movie object
            var movie = movies.get('firstObject');
            console.log('->first', movie.get('poster_path'), movie.get('adult'), movie.get('overview'), movie.get('genre_ids'));
            // What you return here, is actually resolved
            return movies;
        } );
    }
});
