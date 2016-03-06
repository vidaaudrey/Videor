import Ember from 'ember';
const TMDB_BASEURL = 'http://api.themoviedb.org/3/'
const TMDB_KEY = '87380c54ae472259aade42db22a24d89'

export default Ember.Route.extend({
    model: function(param) {
        console.info('movie', param)
        const url = `http://api.themoviedb.org/3/movie/${param.id}?api_key=${TMDB_KEY}`;
        return Ember.$.getJSON(url).then(function(data) {
            const videosUrl = `${TMDB_BASEURL}movie/${param.id}/videos?api_key=${TMDB_KEY}`;
            console.log(data, videosUrl);
            return Ember.$.getJSON(videosUrl).then(function(videoData){
                console.log('video', {...data, videos: videoData.results});
                return  {...data, videos: videoData.results};
            })
        });
    }
});
