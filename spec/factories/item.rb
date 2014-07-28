FactoryGirl.define do
  factory :item do
    name "shirt1_test"
    color "#E8E27C"
    file_name "shirt1.svg"
    association :location

    # after(:build) do |item|
    #   item.location << FactoryGirl.build(:location, name: "Room_test", file_name: "room.svg")
    # end

  end
end
