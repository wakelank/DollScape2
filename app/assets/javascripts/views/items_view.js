var ItemCollectionView = Backbone.View.extend({
//   initialize: function(){
//     var that = this;
//     App.vent.on('changePlace', function(){
//       that.remove();
//     });
//
//     var itemsOnPage = $('.item');
//     _.each(this.model.models, function(item){
//       _.each(itemsOnPage, function(itemOnPage){
//         debugger;
//         if (itemOnPage.attr('href') != item.get('file_name')){
//           that.itemView = new ItemView({model: item});
// debugger;
//         }
//       });
//     });
//     return this;
//
//
//   },



render: function(){
  var that = this;

  _.each(this.model.models, function(item){
      var itemView = new ItemView( {model: item} );
      itemView.render();
    

  });
  return this;
}
});
