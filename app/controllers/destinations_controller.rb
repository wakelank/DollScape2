class DestinationsController < ApplicationController

  def index
    place = Place.find(params[:id])
    destinations = place.destinations
    render json:destinations.to_json
  end

end
