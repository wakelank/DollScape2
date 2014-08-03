#Dollscape
##Description
Dollscape is a webapp I made for my young daughters.  You get a paper doll, various peices of clothing and other items, and a handful of locations to explore.  Put on your bathing suit, go to the beach and look for shells, or dress up fancy for a party.

![Dollscape screetshot](http://imgur.com/YWJ5pTN)
##Development
Dollspace utilizes the following 
- Ruby on Rails
- PostgeSQL
- JavaScript
- SVG.JS
- Backbone

Backbone came in handy for managing the models and colletions.  Each **place** is a model that has a collection of **destinations** (which are also **places**), and a collection of **items**.  The views need to frequents communicate with each other, which was challenging, so I made good use of Backbone's events.  

	...
    if(dollImage.inside(itemUpperLeft.x, itemUpperLeft.y) ||
        dollImage.inside(itemUpperRight.x, itemUpperRight.y) ||
        dollImage.inside(itemLowerLeft.x, itemLowerLeft.y) ||
        dollImage.inside(itemLowerRight.x, itemLowerRight.y) ||
        dollImage.inside(itemMiddle.x, itemMiddle.y)){
      item.set({ 'onDoll': true });
      App.vent.trigger('itemOnDoll', data);
    }else{
     App.vent.trigger('itemOffDoll', data);
     item.set({ 'onDoll': false })
    }
  },

SVG.JS is a JavaScript library for handling SVG images.  It's advantage over Snap.js is that it allows for callbacks in the **drag** method, which was necessary for this app.  However, Snap makes it easier to access portions of a complicated SVG image, while SVG.JS requires you handle the image as a group.  For example, I was able to easily change the color of the doll's hair in Snap, but was unable to in SVG.JS.

##Highlights
The generation of the **places**, **destinations**, and **items** are all database driven.  So to add more all you have to do is edit the seeds.rb file.  One could easily fill this world with hard-to-find places and interesting items for kids to collect.

	home = Place.create({ name: "Home", file_name: "room.svg" })
	beach = Place.create ({ name: "Beach", file_name: "beach.svg"})
	park = Place.create({ name: "Park", file_name: "park.svg" })
	party = Place.create({ name: "Party", file_name: "party.svg" })
	
	Doll.create({ name: 'Lichard', file_name: "doll1.svg", hair_color: "#E64F3E", skin_color: "3ED5E6", place: 	home, x_pos: 0, y_pos: 0,  })

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
	...


