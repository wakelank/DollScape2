var DestinationView = Backbone.View.extend({

  tagname: 'div',
  // className: 'destination',
  // attributes: {'background-image':this.model.get('file_name')},
  //
  // use a template to have the view put the image in the background of a div.
  // remove the placement divs from the index.  Have the view generate them.


  render: function(){
    var id = this.model.get('id');
    var fileName = this.model.get('file_name');
    this.$el.attr('id','destination'+id);
    this.$el.attr('class','destination');
    this.$el.css('background-image', 'url(images/' + fileName + ')');
    $('#destination-places').append(this.$el);

  }
});

// $('#main-place').css('background-image','url(images/' + filename + ')');
// object.style.backgroundImage="url('URL')|none|initial|inherit"
