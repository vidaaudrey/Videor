import Ember from 'ember';

export default Ember.Component.extend({
    size: 200,
    email: '',
    // gravatarUrl: Ember.computed('email', 'size', ()=>{
    //     let email = this.get('email').toLowerCase(),
    //         size = this.get('size');
    //     return `http://www.gravatar.com/avatar/${md5(email)}?s=${size}`;
    // })
    gravatarUrl: Ember.computed('email', 'size', function() {
        var email = this.get('email').toLowerCase(),
            size = this.get('size');

        return `http://www.gravatar.com/avatar/${md5(email)}'?s=${size}`;
      })
});
