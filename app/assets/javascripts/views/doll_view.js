var DollView = Backbone.View.extend({
  initialize: function(){
    var doll_image;
    var itemsOnDoll;
    dollId = this.model.attributes.id;

  },



  render :function(){;
    var filename = this.model.attributes.file_name;
    var doll_image = draw.image('images/' + filename);
    doll_image.draggable();
    doll_image.back();
    var itemsOnDoll = draw.set();

    doll_image.beforedrag = function(){
      var data = { dollImage: doll_image }
      App.vent.trigger('dollDrag', data);
      App.vent.on('itemOnDoll', function(data){
        var itemImage = data.itemImage;
        if (itemsOnDoll.index(itemImage) == -1){
          itemsOnDoll.add(itemImage);
          }
      });
      App.vent.on('itemOffDoll', function(data){
        var itemImage = data.itemImage;
        if (itemsOnDoll.index(itemImage) > -1){
          itemsOnDoll.remove(itemImage);
        }
      })

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
