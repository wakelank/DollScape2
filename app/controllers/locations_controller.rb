class LocationsController < ApplicationController

  def show
    doll = Doll.find(params[:id])
    main_location = doll.location.first()
    render json: main_location.to_json
  end

  def index
    main_location = Location.find(params[:id])
    destinations = main_location.destinations
    render json: destinations.to_json

end
