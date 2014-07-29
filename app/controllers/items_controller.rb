class ItemsController < ApplicationController

  def index
    place = Place.find(params[:id])
    items = place.items
    render json: items.to_json
  end
end
