class CreateLocationDestinationsJoinTable < ActiveRecord::Migration
  def change
    create_join_table :locations, :destinations do |t|
       t.integer :location_id
       t.integer :location_destination_id
    end
  end
end
