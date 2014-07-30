class PlacesController < ApplicationController

  def index
    doll = Doll.find(params[:id])
    main_place = doll.place
    render json: main_place.to_json
  end



  def show
    main_place = Place.find(params[:id])
    render json: main_place.to_json
  end

end
