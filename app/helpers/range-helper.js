import Ember from 'ember';

export function rangeHelper(params/*, hash*/) {
    var range = []
    for(var i=params[0]; i < params[1]; ++i){
      range.push(i)
    }
    return range
}

export default Ember.Helper.helper(rangeHelper);
