class CreateSkills < ActiveRecord::Migration[5.1]
  def change
    create_table :skills do |t|
      t.integer :user_id, null: false
      t.string :skill, null: false
      t.timestamps
    end
  end
end
