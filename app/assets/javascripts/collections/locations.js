var LocationCollection = Backbone.Collection.extend({
  model:Location
  rootUrl:'/location/' + mainLocationId;
});
