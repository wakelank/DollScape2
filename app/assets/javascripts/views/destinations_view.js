var DestinationCollectionView = Backbone.View.extend({


  render: function(){
    var that = this;
    _.each(this.model.models, function(destination){
      var destinationView = new DestinationView({model: destination});
      var placementId = 1;
      destinationView.render({ placementId: placementId });
      ++placementId;
    })
    return this;
  }
});








// GutenbergApp.Views.AuthorListView = Backbone.View.extend({
//   initialize: function(){
//     this.listenTo(this.collection, 'change', this.render);
//   },
//   render: function(){
//     var that = this;
//     this.$el.empty();
//     _.each(this.collection.models, function(author){
//       var authorView = new GutenbergApp.Views.AuthorView({model: author});
//       that.$el.append(authorView.render().el);
//     })
//     return this;
//   }
// });
