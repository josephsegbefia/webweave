class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :projects
  has_one :dashboard, dependent: :destroy
  after_create :create_dashboard


  private

  def create_dashboard
    Dashboard.create(user: self)
  end
end
