import Ember from 'ember';

export function posterUrlHelper(params/*, hash*/) {
  return `https://image.tmdb.org/t/p/w500${params[0]}`;
}

export default Ember.Helper.helper(posterUrlHelper);
