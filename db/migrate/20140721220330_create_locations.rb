class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.string :file_name
      t.references :origin

      t.timestamps
    end
  end
end
