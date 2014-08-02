class PlacesController < ApplicationController


  def index
    places = Place.all
    render json: places.to_json
  end

  def show
    doll = Doll.find(params[:id])
    main_place = doll.place
    render json: main_place.to_json
  end



  # def show
  #   main_place = Place.find(params[:id])
  #   render json: main_place.to_json
  # end



end
