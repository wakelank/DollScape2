var DollView = Backbone.View.extend({
  initialize: function(){
    var that = this;
    var itemsOnDoll;
    dollId = this.model.get('id');
    var doll = this.model;
    var dollImage = doll.dollImage;

    App.vent.on('itemStop', function(item){
      that.isOnDoll(item)
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

  isOnDoll: function(item){
    var dollBox = this.dollImage.bbox();
    var dollImage = this.dollImage;
    var itemImage = item.itemImage;
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
    var filename = this.model.get('file_name');
    this.dollImage = draw.image('images/' + filename);
    this.dollImage.draggable();
    this.dollImage.back();
    this.itemsOnDoll = draw.set();

    this.dollImage.beforedrag = function(){
      var data = { "dollImage": this.dollImage };
      App.vent.trigger('dollDrag', data);


      if (that.itemsOnDoll.members.length > 0 ){
        $.each(that.itemsOnDoll.members, function(i,item){
          var diffX = 0;
          var diffY = 0;
          var itemBox = item.itemImage.bbox();
          var itemX = itemBox.x;
          var itemY = itemBox.y;
          var dollBox = that.dollImage.bbox();
          var dollX = dollBox.x;
          var dollY = dollBox.y;
          diffX = dollX - itemX;
          diffY = dollY - itemY;
          item.itemImage.data({ diffX : diffX, diffY : diffY });
        })
      };
    };

    this.dollImage.dragmove = function(delta,event){
      var dollBox = that.dollImage.bbox();
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
