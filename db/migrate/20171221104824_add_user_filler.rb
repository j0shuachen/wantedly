class AddUserFiller < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :location, :string
    add_column :users, :gender, :string
    add_column :users, :occupation, :string
    add_column :users, :age, :integer


  end
end
