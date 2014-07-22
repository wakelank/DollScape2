class CreateDolls < ActiveRecord::Migration
  def change
    create_table :dolls do |t|
      t.string :name
      t.string :file_name
      t.string :hair_color
      t.string :skin_color
      t.references :location

      t.timestamps
    end
  end
end
