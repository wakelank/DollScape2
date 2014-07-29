var ItemCollectionView = Backbone.View.extend({



  render: function(){
    var that = this;
    _.each(this.model.models, function(item){
      var itemView = new ItemView({model: item});
      itemView.render();
    })
    return this;
  }
});
