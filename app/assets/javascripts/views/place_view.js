var PlaceView = Backbone.View.extend({
  initialize: function(){
    var that = this;
    var place = this.model;
    var items = new ItemCollection();

    itemsUrl = '/place/' + place.get('id') + '/items';
    items.url = itemsUrl;
    place.set('items', items);

      place.get('items').fetch({
        success: function(){

          App.vent.on('itemOnDoll', function(data){
            var item = data.item;
            place.get('items').remove(item);
          });

          App.vent.on('itemOffDoll', function(data){
            var item = data.item;
            items.add(item);
          });

          var itemCollectionView = new ItemCollectionView({ model: place.get('items') });
          console.log("init");
          console.log(place.get('items'))
          itemCollectionView.render();

        }
      });

    // this.model.on('newPlace', this.render());
      App.vent.on("changePlace", function(placeId){
        var place = that.model;
        if (place.get('id') == placeId){
          that.render();
        }
      })

      var destinations = new DestinationCollection();
      destinationsUrl = '/place/' + place.get('id') + '/destinations'
      destinations.url = destinationsUrl;
      place.set('destinations', destinations);

      place.get('destinations').fetch({
        success: function(){
          var destinationCollectionView = new DestinationCollectionView({ model: place.get('destinations') });
          destinationCollectionView.render();
        },
        error: function(model,response,options){
          console.log("fetch error")
        }
      });
      this.render();
  },

  render: function(){
    var place = this.model;
    var filename = place.get('file_name');
    $('#main-place').css('background-image','url(images/' + filename + ')');

    var itemCollectionView = new ItemCollectionView({ model: place.get('items') });
    console.log(place.get('items'));
    itemCollectionView.render();

    $('.destination').each(function(){
      this.parentElement.removeChild(this);
    });

    var destinationCollectionView = new DestinationCollectionView({ model: place.get('destinations')});
    destinationCollectionView.render();
  }

});
