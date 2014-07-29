var PlaceView = Backbone.View.extend({

  render: function(){
    var place = this.model;
    filename = place.get('file_name');
    $('#main-place').css('background-image','url(images/' + filename + ')');

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

    var items = new ItemCollection();
    itemsUrl = '/place/' + place.get('id') + '/items';
    items.url = itemsUrl;
    place.set('items', items);

    place.get('items').fetch({
      success: function(){
        var itemCollectionView = new ItemCollectionView({ model: place.get('items') });
        itemCollectionView.render();
      }
    })


  }

});
