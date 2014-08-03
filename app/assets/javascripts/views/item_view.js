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
    });
  },

  render :function(){
    var that = this;
    var item = this.model;
    var xPos = item.get('x_pos');
    var yPos = item.get('y_pos');
    
    var filename = item.attributes.file_name;
    item.itemImage = draw.image('images/' + filename);
    console.log(item.get('name'));
    console.log('x: ' + xPos.toString() +  ' y: ' + yPos.toString());
    item.itemImage.move(xPos, yPos);
    item.itemImage.draggable();
    item.itemImage.front();
    item.itemImage.addClass('item');

    item.itemImage.beforedrag = function(){
      item.itemImage.front();
    }
    item.itemImage.dragend = function(){
      App.vent.trigger('itemStop', item);

      var itemBox = item.itemImage.bbox()
      item.set('x_pos', itemBox.x);
      item.set('y_pos', itemBox.y);
    }

  }
});
