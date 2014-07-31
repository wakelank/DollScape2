var PlaceCollection = Backbone.Collection.extend({
  model:Place,

  initialize: function(){
    App.vent.on('changePlace', function(){

      debugger;
    })


  }


});
