class Project < ApplicationRecord
  validates_presence_of :name, :description, :github, :url
  belongs_to :user
end
