import Ember from 'ember';

export function youtubeUrlHelper(params/*, hash*/) {
    if(params[0] && params[0][0] && params[0][0].key){
        console.log('video', params[0][0].key);
      return `https://www.youtube.com/embed/${params[0][0].key}`;
    } 
    // if there is no trailer video, just return a funny cat video
    return 'https://www.youtube.com/embed/tntOCGkgt98'
}

export default Ember.Helper.helper(youtubeUrlHelper);
