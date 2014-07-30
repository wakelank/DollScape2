class ItemsController < ApplicationController

  def index
    place = Place.find(params[:id])
    items = place.items
    render json: items.to_json
  end

  def update
    item = Item.find(params[:id])
    item.update_attributes{:id => params[:place_id]}
  end
end
