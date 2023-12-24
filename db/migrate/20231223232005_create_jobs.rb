class CreateJobs < ActiveRecord::Migration[7.1]
  def change
    create_table :jobs do |t|
      t.references :user, null: false, foreign_key: true
      t.string :job_title
      t.string :job_id
      t.text :description
      t.string :employer_name
      t.date :date_posted
      t.date :valid_until
      t.string :application_url
      t.string :job_employment_type
      t.string :job_country
      t.string :job_city
      t.text :job_qualifications
      t.text :job_responsibilities

      t.timestamps
    end
  end
end
