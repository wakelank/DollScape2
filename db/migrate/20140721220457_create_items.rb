class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :file_name
      t.string :color
      t.references :place

      t.timestamps
    end
  end
end
