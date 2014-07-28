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
      if (itemsOnDoll.members > 0 ){
        itemsOnDoll.each(function(){
          var itemBox = this.bbox();
          var itemX = itemBox.x;
          var itemY = itemBox.y;
          var dollBox = doll_image.bbox();
          var dollX = dollBox.x;
          var dollY = dollBox.y;
          diffX = dollX - itemX;
          diffY = dollY - itemY;
        })
      };
    };

    doll_image.dragmove = function(delta,event){
      var dollBox = doll_image.bbox();
      var dollX = dollBox.x;
      var dollY = dollBox.y;

      itemsOnDoll.each(function(){
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
