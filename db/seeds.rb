# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



home = Location.create({ name: "Home", file_name: "room.svg" })
beach = Location.create ({ name: "Beach", file_name: "beach.svg"})
park = Location.create({ name: "Park", file_name: "park.svg" })
party = Location.create({ name: "Party", file_name: "party.svg" })

Doll.create({ name: 'Lichard', file_name: "doll1.svg", hair_color: "#E64F3E", skin_color: "3ED5E6", location: home })

Location.all.each do |loc|
  Location.all.each do |dest|
    loc.destinations <<  dest if loc != dest
  end
end

Item.create({name: "shirt1", color:"#E8E27C", location: home, file_name: "shirt1.svg"})
Item.create({name: "pants1", color:"#E87CD2", location: home, file_name: "pants1.svg"})
