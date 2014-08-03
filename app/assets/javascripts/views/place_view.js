var PlaceView = Backbone.View.extend({
  initialize: function(){
    var that = this;
    var place = this.model;

      App.vent.on("renderPlace", function(placeId){
        place.set({'mainPlace' : false })
        if (place.get('id') == placeId){
          that.render();
          place.set({'mainPlace' : true });
        }
      });

      App.vent.on('save', function(){
        var items = place.get('items');
        _.each(items.models, function(item){
          item.set('place_id', place.get('id'));
          item.save({
            success: function(){
              console.log("saved");
            },
            error: function(){
              console.log("save error");
            }
          });
        })
      });

      var destinations = new DestinationCollection();
      var destinationsUrl = '/place/' + place.get('id') + '/destinations'
      destinations.url = destinationsUrl;
      place.set('destinations', destinations);

      place.get('destinations').fetch({
        success: function(){
          var destinationCollectionView = new DestinationCollectionView({ model: place.get('destinations') });
        },
        error: function(model,response,options){
          console.log("fetch error")
        }
      });

      var items = new ItemCollection();
      var itemsUrl = '/place/' + place.get('id') + '/items';
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
            if (place.get('mainPlace')){
              place.get('items').add(item);
            }
          });

          if (place.get('dollPlace')){
            that.render();
          }
        }
      })

  },

  render: function(){
    var place = this.model;
    var filename = place.get('file_name');
    $('#main-place').css('background-image','url(images/' + filename + ')');
    console.log(filename);
     itemCollectionView = new ItemCollectionView({ model: place.get('items') });
     place.set({'itemsView' : itemCollectionView});
     itemCollectionView.render();

    $('.destination').each(function(){
      this.parentElement.removeChild(this);
    });

    var destinationCollectionView = new DestinationCollectionView({ model: place.get('destinations')});
    destinationCollectionView.render();
  }

});
