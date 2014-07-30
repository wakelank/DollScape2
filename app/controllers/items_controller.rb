class ItemsController < ApplicationController

  def index
    place = Place.find(params[:id])
    items = place.items
    render json: items.to_json
  end

  def update
    item = Item.find(params[:id])
    item.update!(item_params)
  end

end


   def item_params
      params.require(:item).permit(:place_id)
    end
