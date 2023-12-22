class CreateProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.text :bio
      t.string :headline
      t.string :email
      t.integer :phone_number
      t.string :github
      t.string :linkedin

      t.timestamps
    end
  end
end
