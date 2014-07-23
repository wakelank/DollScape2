var DollView = Backbone.View.extend({

  render :function(){
    debugger;
    filename = this.model.attributes.file_name;
    doll_image = draw.image('images/' + filename);
    doll_image.draggable();

    doll_image.beforedrag = function(){
      doll_set.each(function(){
        var itemBox = this.bbox();
        var itemX = itemBox.x;
        var itemY = itemBox.y;
        var dollBox = doll_image.bbox();
        var dollX = dollBox.x;
        var dollY = dollBox.y;
        diffX = dollX - itemX;
        diffY = dollY - itemY;
      })
    }

    doll_image.dragmove = function(delta,event){
      var dollBox = doll_image.bbox();
      var dollX = dollBox.x;
      var dollY = dollBox.y;

      doll_set.each(function(){
        var itemBox = this.bbox();
        var itemX = itemBox.x;
        var itemY = itemBox.y;
        this.move(dollX - diffX, dollY - diffY);
      })
    }
  }

});
