class DollsController < ApplicationController

  def index
      doll = Doll.first()
      render json: doll.to_json

      # @location = @doll.location
      # @destinations = @location.destinations.all
      # @items = @location.items.all
  end

end
