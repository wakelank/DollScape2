var DestinationView = Backbone.View.extend({

  // 
  // use a template to have the view put the image in the background of a div.
  // remove the placement divs from the index.  Have the view generate them.


  render: function(options){
    var options = this.options;
    debugger;
    console.log(this.model.get('id')+ ' ');
    var place = this.model;
    filename = place.get('file_name');
    debugger;
     $('#placement'+ placementId).css('background-image','url(images/' + filename + ')');
  }
});
