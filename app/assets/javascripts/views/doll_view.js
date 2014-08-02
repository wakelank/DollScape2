var DollView = Backbone.View.extend({
  initialize: function(){
    var that = this;
    var doll_image;
    var itemsOnDoll;
    dollId = this.model.get('id');

    // this.places = new PlaceCollection();
    // App.vent.on('newPlace', function(place){
    //   that.places.add(place);
    // })

    App.vent.on('changePlace', function(placeId){
      var newPlace = that.places.get(placeId);
       if (!newPlace.get('items')){
         var placeView = new PlaceView({ model: newPlace });
       }
      //  newPlace.trigger('newPlace');
       console.log(newPlace.get('items'))

    })

    var place = new Place();
    place = this.model.get('mainPlace');
     place.fetch({
      success: function(data){
        var placeView = new PlaceView({model: place})
        placeView.render();
        // App.vent.trigger('newPlace', place)
      }
    });

    App.vent.on('itemOnDoll', function(data){
      var item = data.item;
      if (that.itemsOnDoll.index(item) == -1){
        that.itemsOnDoll.add(item);

        }
    });
    App.vent.on('itemOffDoll', function(data){
      var item = data.item;
      if (that.itemsOnDoll.index(item) > -1){
        that.itemsOnDoll.remove(item);
      }
    });

    function isItemOnDoll(item){
      for (var i = 0; i < that.itemsOnDoll.members.length; ++i){
        var val = false;
        if (that.itemsOnDoll.members[i].node == item){
          val = true;
        }
      }
      return val;
    }
  },

  render :function(){
    var that = this;
    var filename = this.model.get('file_name');
    var doll_image = draw.image('images/' + filename);
    doll_image.draggable();
    doll_image.back();
    this.itemsOnDoll = draw.set();

    doll_image.beforedrag = function(){
      var data = { dollImage: doll_image };
      App.vent.trigger('dollDrag', data);


      if (that.itemsOnDoll.members.length > 0 ){
        $.each(that.itemsOnDoll.members, function(i,item){
          var diffX = 0;
          var diffY = 0;
          var itemBox = item.itemImage.bbox();
          var itemX = itemBox.x;
          var itemY = itemBox.y;
          var dollBox = doll_image.bbox();
          var dollX = dollBox.x;
          var dollY = dollBox.y;
          diffX = dollX - itemX;
          diffY = dollY - itemY;
          item.itemImage.data({ diffX : diffX, diffY : diffY });
        })
      };
    };

    doll_image.dragmove = function(delta,event){
      var dollBox = doll_image.bbox();
      var dollX = dollBox.x;
      var dollY = dollBox.y;

    $.each(that.itemsOnDoll.members, function(i,item){
        var diffX = item.itemImage.data('diffX');
        var diffY = item.itemImage.data('diffY');
        var itemBox = item.itemImage.bbox();
        var itemX = itemBox.x;
        var itemY = itemBox.y;
        item.itemImage.move(dollX - diffX, dollY - diffY);
      })
    };
  }
});
