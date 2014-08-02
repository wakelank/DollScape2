class CreateDolls < ActiveRecord::Migration
  def change
    create_table :dolls do |t|
      t.string :name
      t.string :file_name
      t.string :hair_color
      t.string :skin_color
      t.integer :x_pos
      t.integer :y_pos
      t.references :place

      t.timestamps
    end
  end
end
