var PlaceView = Backbone.View.extend({

  render: function(){
    filename = this.attributes.file_name;
    $('#main-place').css('background-image','url(images/' + filename + ')');

    this.attributes.destinations.fetch({
      success: function(data){
        var destinationsView = new DestinationsView( data );
        destinationsView.render();
      }
    });

  }

});
