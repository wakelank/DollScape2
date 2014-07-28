var Place = Backbone.Model.extend({
  initialize:function(){
    var destinationsUrl = '/place/' + this.get('id') + '/destinations';
    var destinations = new DestinationCollection();
    destinations.url = destinationsUrl;
    this.set('destinations', destinations);
  }

});






//
//
// GutenbergApp.Models.Author = Backbone.Model.extend({
//   initialize:function(){
//     var booksUrl = '/authors/'+ this.get('id') + '/books';
//     var books = new GutenbergApp.Collections.BookCollection();
//     books.url = booksUrl;
//     this.set('books', books);
//   }
// });
