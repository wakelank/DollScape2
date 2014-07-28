require 'rails_helper'

RSpec.describe Doll, :type => :model do
  it "has a valid factory" do
    expect(FactoryGirl.build(:doll)).to be_valid
  end
end
