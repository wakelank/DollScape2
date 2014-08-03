var DollView = Backbone.View.extend({
  initialize: function(){

    var that = this;
    var itemsOnDoll;
    dollId = this.model.get('id');
    var doll = this.model;
    var dollImage = doll.dollImage;
    var skinColorIndex = 0;
    var hairColorIndex = 0;

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

    App.vent.on('changeSkinColor', function(){
      changeSkinColor();
    });

    App.vent.on('changeHairColor', function(){
      changeSkinColor();
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
    var itemUpperLeft = { 'x' : itemBox.x, 'y' : itemBox.y };
    var itemUpperRight = { 'x' : itemBox.x + itemBox.width, 'y' : itemBox.y };
    var itemLowerLeft = { 'x' : itemBox.x, 'y' : itemBox.y + itemBox.height };
    var itemLowerRight = { 'x' : itemBox.x + itemBox.width, 'y' : itemBox.y + itemBox.height };
    var itemMiddle = { 'x' : itemBox.x + (itemBox.width/2), 'y' : itemBox.y + (itemBox.height/2) };

    var itemX = itemBox.x;
    var itemY = itemBox.y;
    var data = {};
    data.item = item;
    data.itemImage = itemImage;
    if(dollImage.inside(itemUpperLeft.x, itemUpperLeft.y) ||
        dollImage.inside(itemUpperRight.x, itemUpperRight.y) ||
        dollImage.inside(itemLowerLeft.x, itemLowerLeft.y) ||
        dollImage.inside(itemLowerRight.x, itemLowerRight.y) ||
        dollImage.inside(itemMiddle.x, itemMiddle.y)){
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
    var moveFeedBackConst = 10;


    this.dollImage.beforedrag = function(){
      var data = { "dollImage": this.dollImage };
      App.vent.trigger('dollDrag', data);

      var dollBox = that.dollImage.bbox();
      var dollX = dollBox.x;
      var dollY = dollBox.y;

      that.dollImage.move(dollX - moveFeedBackConst, dollY - moveFeedBackConst );
      that.dollImage.front();

      if (that.itemsOnDoll.members.length > 0 ){
        $.each(that.itemsOnDoll.members, function(i,item){
          var diffX = 0;
          var diffY = 0;
          var itemBox = item.itemImage.bbox();
          var itemX = itemBox.x;
          var itemY = itemBox.y;
          item.itemImage.move (itemX - moveFeedBackConst, itemY - moveFeedBackConst);
          item.itemImage.front();

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
      });
    };

    this.dollImage.dragend = function(){
      var dollBox = that.dollImage.bbox();
      var dollX = dollBox.x;
      var dollY = dollBox.y;
      that.dollImage.move(dollX + moveFeedBackConst, dollY + moveFeedBackConst);

      $.each(that.itemsOnDoll.members, function(i,item){
          var itemBox = item.itemImage.bbox();
          var itemX = itemBox.x;
          var itemY = itemBox.y;
          item.itemImage.move (itemX + moveFeedBackConst, itemY + moveFeedBackConst);

      });
    };
  }
});
