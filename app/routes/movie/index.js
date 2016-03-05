import Ember from 'ember';
const TMDB_BASEURL = 'http://api.themoviedb.org/3/'
export default Ember.Route.extend({
    model: function(param) {
        console.info('movie', param)
        const url = `http://api.themoviedb.org/3/movie/${param.id}?api_key=87380c54ae472259aade42db22a24d89`;
        return Ember.$.getJSON(url).then(function(data) {
            const videosUrl = `${TMDB_BASEURL}movie/${param.id}/videos?api_key=87380c54ae472259aade42db22a24d89`;
            console.log(data, videosUrl);
            return Ember.$.getJSON(videosUrl).then(function(videoData){
                console.log('video', {...data, videos: videoData.results});
                return  {...data, videos: videoData.results};
            })
        });
    }
});
