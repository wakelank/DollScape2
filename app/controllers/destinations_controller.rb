class DestinationsController < ApplicationController

  def index
    location = Location.find(params[:id])
    destinations = location.destinations
    render json:destinations.to_json
  end

end
