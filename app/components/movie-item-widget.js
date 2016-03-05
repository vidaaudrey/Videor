import Ember from 'ember';

let TMDB_IMAGEP_PATH = 'https://image.tmdb.org/t/p/w500';

export default Ember.Component.extend({
    id: '',
    title: '',
    overview: '',
    posterPath:'',
    posterUrl: Ember.computed('posterPath', function(){
        console.log('----',TMDB_IMAGEP_PATH + this.get('posterPath') )
        return `${TMDB_IMAGEP_PATH}${this.get('posterPath')}`;
    }),
    movieUrl: Ember.computed('id', function(){
        return 'movie/'
        // return `movie/${this.get('id')}`
    })
});
