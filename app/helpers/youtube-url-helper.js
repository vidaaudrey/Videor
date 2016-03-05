import Ember from 'ember';

export function youtubeUrlHelper(params/*, hash*/) {
    if(params[0]){
        console.log('video', params[0][0].key);

      return `https://www.youtube.com/embed/${params[0][0].key}`;
    }
}

export default Ember.Helper.helper(youtubeUrlHelper);
