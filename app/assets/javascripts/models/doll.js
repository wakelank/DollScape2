var Doll = Backbone.Model.extend({
  initialize: function(){
    var dollImage;
  },

  urlRoot: '/dolls',
  // set_place: function(doll_id){
  //   var mainPlaceUrl = '/doll/' + doll_id + '/place';
  //   var mainPlace = new Place();
  //   mainPlace.url = mainPlaceUrl;
  //   this.set('mainPlace', mainPlace);
  // }
});
