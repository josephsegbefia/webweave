class ProfilesController < ApplicationController
  before_action :authenticate_user!


  def show
    @profile = current_user.profile
    authorize @profile
  end
end
