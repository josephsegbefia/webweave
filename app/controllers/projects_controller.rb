class ProjectsController < ApplicationController
  before_action :set_project, only: [:show]
  # before_action :authenticate_user!


  def index
    @projects = Project.all
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    @project.user = current_user
    if @project.save
      redirect_to projects_path, notice: "Project added!"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    # @project = Project.find(params[:id])
  end


  private

  def project_params
    params.require(:project).permit(:name, :description, :github, :url)
  end

  def set_project
    @project = Project.find(params[:id])
  end
end
