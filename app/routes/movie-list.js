import Ember from 'ember';
const TMDB_BASEURL = '//api.themoviedb.org/3/'
const TMDB_KEY = '87380c54ae472259aade42db22a24d89'
export default Ember.Route.extend({
    model: function(params){
        console.info('movie-list route', params)
        // reuse the movie-list based on different params, the only differece is the url in the middle 
        
        // if no params, return default discover list
        // [Discover](http://api.themoviedb.org/3/discover/movie?api_key=87380c54ae472259aade42db22a24d89)
        let urlPartial = 'discover/movie?'
        
        // fetch movies based on category
        // [Popular](http://api.themoviedb.org/3/movie/popular?api_key=87380c54ae472259aade42db22a24d89)
        if(params.category){
            urlPartial = `movie/${params.category}?`
        }
        // fetch movies based on search result
        // [Search Movie](http://api.themoviedb.org/3/search/movie?query=future&api_key=87380c54ae472259aade42db22a24d89)
        if(params.query){
            urlPartial = `search/movie?query=${params.query}&`
        }
        
        // support pagination
        urlPartial += params.page ?  `&page=${params.page}` : ''
        console.log('will query', urlPartial);
         return Ember.$.getJSON(`${TMDB_BASEURL}${urlPartial}&api_key=${TMDB_KEY}`).then(function(data) {
           return data.results.map(function(movie){
                console.log('finished query', movie);
              return Ember.Object.create(movie);
            } );
        });
    }
});
