class CreatePlacesDestinationsJoinTable < ActiveRecord::Migration
  def change
    create_join_table :places, :destinations do |t|
       t.integer :place_id
       t.integer :place_destination_id
    end
  end
end
