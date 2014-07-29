require 'rails_helper'

RSpec.describe PlacesController, :type => :controller do
  it "has an index page that works" do
    FactoryGirl.create(:place)
    get :index , id: 1
    expect(response.code).to eq "200"
  end
end
