var DestinationCollectionView = Backbone.View.extend({

  render: function(){
    var that = this;
    _.each(this.model.models, function(destination){
      var destinationView = new DestinationView({model: destination});
      destinationView.render();
    })
    return this;
  }
});
