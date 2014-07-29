require 'rails_helper'

RSpec.describe Place, :type => :model do
  it "has a valid factory" do
    expect(FactoryGirl.build(:place)).to be_valid
  end
end
