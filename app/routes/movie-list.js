import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        console.info('got data', params)
    }
});
