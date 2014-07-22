class DollsController < ApplicationController

  def index
      @doll = Doll.first()
      @location = @doll.location
      @destinations = @location.destinations.all
      @items = @location.items.all
  end

end
