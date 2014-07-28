var PlaceView = Backbone.View.extend({

  render: function(){
    debugger;
    filename = this.attributes.file_name;
    $('#main-location').css('background-image','url(images/' + filename + ')');

    this.attributes.destinations.fetch({
      success: function(data){
        var destinationsView = new DestinationsView( data );
        destinationsView.render();
      }
    });

  }

});
