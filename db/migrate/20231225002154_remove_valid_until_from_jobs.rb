class RemoveValidUntilFromJobs < ActiveRecord::Migration[7.1]
  def change
    remove_column :jobs, :valid_until
  end
end
