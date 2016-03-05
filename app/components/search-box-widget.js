import Ember from 'ember';

export default Ember.Component.extend({
    searchText: '',
    actions: {
        searchMovies() {
            console.log('--- action search', this.get('searchText'));
        }
    }
});
