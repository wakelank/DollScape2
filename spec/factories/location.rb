FactoryGirl.define do
  factory :location do
    name "Home_test"
    file_name "room.svg"
    # association :destination, 
    #
    # after(:build) do |location|
    #   location.destinations << FactoryGirl.build(:destination, :location => location)
    # end
  end
end




# Factory.define :foo do |f|
#   f.name "A Foo"
#   f.after_build { |foo|
#     foo.bars << Factory.build(:bar, :foo => foo)
#   }
#   f.after_create { |foo|
#     foo.bars.each { |bar| bar.save! }
#   }
# end
