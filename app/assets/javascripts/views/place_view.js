var PlaceView = Backbone.View.extend({

  render: function(){
    filename = this.model.attributes.file_name;
    $('#main-place').css('background-image','url(images/' + filename + ')');

    // this.attributes.destinations.fetch({
    //   success: function(data){
    //     var destinationsView = new DestinationsView( data );
    //     destinationsView.render();
    //   }
    // });

  }

});
