class AddSkillsToProfile < ActiveRecord::Migration[7.1]
  def change
    add_column :profiles, :skills, :string, array: true
  end
end
