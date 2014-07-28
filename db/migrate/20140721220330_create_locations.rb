class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name
      t.string :file_name
      t.references :origin

      t.timestamps
    end
  end
end
