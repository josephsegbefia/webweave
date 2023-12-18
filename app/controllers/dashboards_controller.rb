class DashboardsController < ApplicationController
  before_action :authenticate_user!


  def show
    @dashboard = current_user.dashboard
    authorize @dashboard
  end
end
