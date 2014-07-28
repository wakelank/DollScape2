class Place < ActiveRecord::Base
  has_many :items
  has_many :dolls

  has_and_belongs_to_many :destinations, class_name: "Place",
                                  join_table: "destinations_places",
                                  association_foreign_key: "destination_id"


end
