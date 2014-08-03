var DestinationView = Backbone.View.extend({
  initialize: function(){
    var destination = this.model;
  //  App.vent.trigger('newPlace', destination);
  },

  tagname: 'div',

  render: function(){
    this.$el.html('');
    this.$el.off();
    var count = 0;
    var placeId = this.model.get('id');
    var fileName = this.model.get('file_name');
    this.$el.attr('id','destination'+ placeId);
    this.$el.attr('class','destination');
    this.$el.css('background-image', 'url(images/' + fileName + ')');
    $('#destination-places').append(this.$el);

    this.$el.on('click', function(event){
      event.preventDefault();
      changePlace(placeId) });


    function changePlace(placeId){
      console.log("changePlace"+ placeId);

      App.vent.trigger('changePlace',placeId);
      App.vent.trigger('renderPlace', placeId);

    }

  }
});
