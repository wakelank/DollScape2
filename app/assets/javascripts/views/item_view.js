var ItemView = Backbone.View.extend({
  initialize: function(){




  },


  render :function(){
    var item = this.model;
    filename = item.attributes.file_name;
    itemImage = draw.image('images/' + filename);
    itemImage.draggable();
    itemImage.front();
    itemImage.addClass('item');

    App.vent.on('dollDrag', function(data){
      var dollImage = data.dollImage;
      stickToDoll(dollImage, itemImage);
    });

    function stickToDoll(dollImage,  itemImage){
      var itemBox = itemImage.bbox();
      var itemX = itemBox.x;
      var itemY = itemBox.y;
      if(dollImage.inside(itemX, itemY)){
        App.vent.trigger('itemOn', itemImage)
      }else{
       App.vent.trigger('itemOff', itemImage)
      }

    }
  }
});
