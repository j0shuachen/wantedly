class AddImageToEndorsement < ActiveRecord::Migration[5.1]
  def change
    add_column :endorsements, :image_url, :string
  end
end
