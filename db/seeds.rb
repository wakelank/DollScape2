# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



home = Place.create({ name: "Home", file_name: "room.svg" })
beach = Place.create ({ name: "Beach", file_name: "beach.svg"})
park = Place.create({ name: "Park", file_name: "park.svg" })
party = Place.create({ name: "Party", file_name: "party.svg" })

Doll.create({ name: 'Lichard', file_name: "doll1.svg", hair_color: "#E64F3E", skin_color: "3ED5E6", place: home, x_pos: 0, y_pos: 0,  })

Place.all.each do |place|
  Place.all.each do |dest|
    place.destinations <<  dest if place != dest
  end
end

Item.create({name: "shirt1", color:"#E8E27C", place: home, file_name: "shirt1.svg", x_pos: 0, y_pos: 0  })
Item.create({name: "pants1", color:"#E87CD2", place: beach, file_name: "pants1.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "dress1", color:"#", place: home, file_name: "dress1.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "dress2", color:"#", place: home, file_name: "dress2.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "dress3", color:"#", place: party, file_name: "dress3.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "dress4", color:"#", place: party, file_name: "dress4.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "ball1", color:"#", place: park, file_name: "ball1.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "bathingsuit1", color:"#", place: home, file_name: "bathingsuit1.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "bathingsuit2", color:"#", place: beach, file_name: "bathingsuit2.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "boot1l", color:"#", place: home, file_name: "boot1l.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "boot1r", color:"#", place: home, file_name: "boot1r.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "boot2l", color:"#", place: party, file_name: "boot2l.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "boot2r", color:"#", place: party, file_name: "boot2r.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "bow1", color:"#", place: park, file_name: "bow1.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "crown1", color:"#", place: party, file_name: "crown1.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "hat1", color:"#", place: park, file_name: "hat1.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "hat2", color:"#", place: home, file_name: "hat2.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "hat3", color:"#", place: beach, file_name: "hat3.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "necklace1", color:"#", place: party, file_name: "necklace1.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "shell1", color:"#", place: beach, file_name: "shell1.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "shell2", color:"#", place: beach, file_name: "shell2.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "shoe1l", color:"#", place: park, file_name: "shoe1l.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "shoe1r", color:"#", place: park, file_name: "shoe1r.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "star1", color:"#", place: park, file_name: "star1.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "star2", color:"#", place: beach, file_name: "star2.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "shoe2l", color:"#", place: beach, file_name: "shoe2l.svg", x_pos: 0, y_pos: 0 })
Item.create({name: "shoe2r", color:"#", place: beach, file_name: "shoe2r.svg", x_pos: 0, y_pos: 0 })
