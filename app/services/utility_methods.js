import Ember from 'ember';

export default Ember.Service.extend({

  arrayExists: function(arr){
    return arr && arr.length;
  },

  exists: function(obj) {
    return obj;
  }
});
