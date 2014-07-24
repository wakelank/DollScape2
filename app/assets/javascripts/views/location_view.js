var LocationView = Backbone.View.extend({

  render: function(){
    filename = this.attributes.file_name;
    $('#main-location').css('background-image','url(images/' + filename + ')');
  }

});
