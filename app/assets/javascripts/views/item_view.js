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
      isOnDoll(dollImage, itemImage, item);
    });

    function isOnDoll(dollImage,  itemImage,item){
      var itemBox = itemImage.bbox();
      var itemX = itemBox.x;
      var itemY = itemBox.y;
      var data = {};
      data.item = item;
      data.itemImage = itemImage;
      if(dollImage.inside(itemX, itemY)){
        App.vent.trigger('itemOnDoll', data);
        console.log('item on' + data.item);
      }else{
       App.vent.trigger('itemOffDoll', data);
       console.log('item off ' + data.item);
      }

    }
  }
});
