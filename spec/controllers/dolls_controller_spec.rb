require 'rails_helper'

RSpec.describe DollsController, :type => :controller do
  it "has an index page that works" do
    get :index
    expect(response.code).to eq "200"
  end

  it "gets doll data from database" do
    expected = "Lichard_test";
    FactoryGirl.create(:doll)
    get :index
    expect(JSON.parse(response.body).values).to include expected
  end

  it "gets a place ID with the doll" do
    FactoryGirl.create(:doll)

    expected = "place_id"
    get :index
    expect(response.body).to include expected
  end





end



# @expected = {
#         :flashcard  => @flashcard,
#         :lesson     => @lesson,
#         :success    => true
# }.to_json
# get :action # replace with action name / params as necessary
# response.body.should == @expected
