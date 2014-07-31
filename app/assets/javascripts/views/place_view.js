var PlaceView = Backbone.View.extend({
  initialize: function(){
    // App.vent.trigger('changePlace',function(id){
    //   if (this.model.get('id') == id){
    //     this.render();
    //   };
    // });
  },


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
        $('.destination').each(function(){
            this.parentElement.removeChild(this);
        });
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
          App.vent.on('itemOnDoll', function(data){
            var item = data.item;
            items.remove(item);
            // items.each(function(item){
            //   Backbone.sync("update", item);
            // });
          });
          App.vent.on('itemOffDoll', function(data){
            var item = data.item;
            items.add(item);
            console.log(item + ' added to '+ place)
            items.each(function(item){
              item.set('place_id', place.get('id'));
              Backbone.sync("update", item);
            });
          });
          var itemCollectionView = new ItemCollectionView({ model: place.get('items') });
          itemCollectionView.render();
        }
      })


  }

});
