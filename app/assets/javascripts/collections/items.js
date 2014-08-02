var ItemCollection = Backbone.Collection.extend({
  model : Item,

  initialize: function(){
    console.log('new itemcollection!');
  }
});
