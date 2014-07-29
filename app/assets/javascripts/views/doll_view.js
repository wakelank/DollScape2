var DollView = Backbone.View.extend({
  initialize: function(){
    var doll_image;
    var itemsOnDoll;
    dollId = this.model.attributes.id;

  },



  render :function(){;
    filename = this.model.attributes.file_name;
    doll_image = draw.image('images/' + filename);
    doll_image.draggable();
    doll_image.back();
    itemsOnDoll = draw.set();

    doll_image.beforedrag = function(){
      var data = { dollImage: doll_image }
      App.vent.trigger('dollDrag', data);
      App.vent.on('itemOn', function(itemImage){
        if (itemsOnDoll.index(itemImage) == -1){
          itemsOnDoll.add(itemImage);
        }
      });

      if (itemsOnDoll.members.length > 0 ){
        itemsOnDoll.each(function(){
          var diffX = 0;
          var diffY = 0;
          var itemBox = this.bbox();
          var itemX = itemBox.x;
          var itemY = itemBox.y;
          var dollBox = doll_image.bbox();
          var dollX = dollBox.x;
          var dollY = dollBox.y;
          diffX = dollX - itemX;
          diffY = dollY - itemY;
          this.data({ diffX : diffX, diffY : diffY });

        })
      };
    };

    doll_image.dragmove = function(delta,event){
      var dollBox = doll_image.bbox();
      var dollX = dollBox.x;
      var dollY = dollBox.y;

      itemsOnDoll.each(function(){
        var diffX = this.data('diffX');
        var diffY = this.data('diffY');
        var itemBox = this.bbox();
        var itemX = itemBox.x;
        var itemY = itemBox.y;
        this.move(dollX - diffX, dollY - diffY);
      })
    };

    var place = new Place();
    place = this.model.get('mainPlace');
     place.fetch({
      success: function(data){
        var placeView = new PlaceView({model: place})
        placeView.render();
      }
    });



  }

});
