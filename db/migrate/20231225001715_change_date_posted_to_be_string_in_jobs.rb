class ChangeDatePostedToBeStringInJobs < ActiveRecord::Migration[7.1]
  def change
    change_column :jobs, :date_posted, :string
  end
end
