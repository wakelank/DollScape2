$(function(){


var draw = SVG('drawing').size('100%', 500);
var rect = draw.rect(100, 100).attr({ fill: '#f06' });
var doll_image = draw.image('images/doll1.svg');
var glasses = draw.image('images/glasses1.svg');
var pants = draw.image('images/pants1.svg');

var doll_set = draw.set();
var diffX = 0;
var diffY = 0;


glasses.draggable();
doll_image.draggable();
pants.draggable();

//doll_set.draggable();

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


glasses.dragmove = function(delta, event){
  var itemBox = glasses.bbox();
  var itemX = itemBox.x;
  var itemY = itemBox.y;

  if (doll_image.inside(itemX, itemY)){
    if (doll_set.index(glasses) == -1){
      doll_set.add(glasses);
    }
  }
else{
  doll_set.remove(glasses);
}
}



})
