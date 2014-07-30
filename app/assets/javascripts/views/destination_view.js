var DestinationView = Backbone.View.extend({

  tagname: 'div',

  render: function(){
    var id = this.model.get('id');
    var fileName = this.model.get('file_name');
    this.$el.attr('id','destination'+id);
    this.$el.attr('class','destination');
    this.$el.css('background-image', 'url(images/' + fileName + ')');
    $('#destination-places').append(this.$el);

    this.$el.on('click', function(){ changeDestination(id) });

    function changeDestination(id){
      var place = new Place();
      place.url = '/place/' + id
       place.fetch({
        success: function(data){
          var placeView = new PlaceView({model: place})
          placeView.render();
          mainPlaceId = id;
        }
      });
    }

  }
});

// $('#main-place').css('background-image','url(images/' + filename + ')');
// object.style.backgroundImage="url('URL')|none|initial|inherit"
