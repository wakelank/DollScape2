require 'rails_helper'

RSpec.describe DollsController, :type => :controller do
  it "has an index page that works" do
    get :index
    expect(response.code).to eq "200"
  end

  it "gets doll data from database" do
    @expected = {
                :name => "Lichard_test",
                :file_name => "doll1.svg",
                :hair_color => "#E64F3E",
                :skin_color => "#3ED5E6"

    }.to_json
    FactoryGirl.create(:doll)

    get :index
    expect(response.body).to eq @expected
  end





end



# @expected = {
#         :flashcard  => @flashcard,
#         :lesson     => @lesson,
#         :success    => true
# }.to_json
# get :action # replace with action name / params as necessary
# response.body.should == @expected
