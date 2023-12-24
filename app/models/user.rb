class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates_presence_of :first_name, :last_name
  has_many :projects, dependent: :destroy
  has_many :jobs, dependent: :destroy
  has_one :dashboard, dependent: :destroy
  has_one :profile, dependent: :destroy
  after_create :create_dashboard
  after_create :create_profile


  private

  def create_dashboard
    Dashboard.create(user: self)
  end

  def create_profile
    Profile.create(user: self)
  end
end
