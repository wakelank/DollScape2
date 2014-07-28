FactoryGirl.define do
  factory :doll do
    name "Lichard_test"
    file_name "doll1.svg"
    hair_color "#E64F3E"
    skin_color "#3ED5E6"
    association :location

    # after(:build) do |doll|
    #   doll.location << FactoryGirl.build(:location, name: "Room_test", file_name: "room.svg")
    # end
  end
end
