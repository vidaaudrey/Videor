import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['category', 'query', 'page'],
     category: null,
     query:null,
     page: 1, 
     pageTitle: Ember.computed('query', 'category', function(){
        if(this.get('query')){
            return `Search results for "${this.get('query')}"`
        }
        const category = this.get('category')

        if(category){
            const displayCategory = category.split('_').reduce((total,item) => {
                total += item.capitalize() + ' '
                return total
            }, '')
            return `${displayCategory} Movies`
        }
     })
});
