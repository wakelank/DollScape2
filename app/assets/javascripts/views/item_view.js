var ItemView = Backbone.View.extend({
  initialize: function(){
    var that = this;
    var item = this.model;
    item.set({'onDoll' : false});

    App.vent.on('changePlace', function(placeId){
      if (item.get('onDoll')==false){
         item.itemImage.remove();
         that.remove();
    
       }
      //  that.renderPlace(placeId);

    });

  },

    // renderPlace: function(placeId){
    //   console.log('renderplace trigger');
    //
    //   App.vent.trigger('renderPlace', placeId);
    //
    //
    //
    // },



  isOnDoll: function(dollImage,  itemImage,item){
    var itemBox = itemImage.bbox();
    var itemX = itemBox.x;
    var itemY = itemBox.y;
    var data = {};
    data.item = item;
    data.itemImage = itemImage;
    if(dollImage.inside(itemX, itemY)){
      item.set({ 'onDoll': true });
      App.vent.trigger('itemOnDoll', data);
      console.log('item on' + data.item);
    }else{
     App.vent.trigger('itemOffDoll', data);
     item.set({ 'onDoll': false })
     console.log('item off ' + data.item);
    }
  },
  render :function(){
    var that = this;

    var item = this.model;
    var filename = item.attributes.file_name;
    item.itemImage = draw.image('images/' + filename);
    item.itemImage.draggable();
    item.itemImage.front();
    item.itemImage.addClass('item');

    App.vent.on('dollDrag', function(data){
      var dollImage = data.dollImage;
      that.isOnDoll(dollImage, item.itemImage, item);
    });
  }
});
