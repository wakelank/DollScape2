var ItemView = Backbone.View.extend({

  render :function(){
    var item = this.model;
    var filename = item.attributes.file_name;
    var itemImage = draw.image('images/' + filename);
    itemImage.draggable();
    itemImage.front();
    itemImage.addClass('item');

    itemImage.dragmove = function(){
    };

    App.vent.on('dollDrag', function(data){
      var dollImage = data.dollImage;
      isOnDoll(dollImage, itemImage);
    });

    function isOnDoll(dollImage,  itemImage){
      var itemBox = itemImage.bbox();
      var itemX = itemBox.x;
      var itemY = itemBox.y;
      var data = {};
      data.item = this.model;
      data.itemImage = itemImage;
      if(dollImage.inside(itemX, itemY)){
        App.vent.trigger('itemOnDoll', data);
      }else{
       App.vent.trigger('itemOffDoll', data);
      }

    }
  }
});
