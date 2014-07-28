class PlacesController < ApplicationController

  def show
    doll = Doll.find(params[:id])
    main_place = doll.place
    render json: main_place.to_json
  end

  def index
    main_place = Place.find(params[:id])
    destinations = main_place.destinations
    render json: destinations.to_json
  end

end
