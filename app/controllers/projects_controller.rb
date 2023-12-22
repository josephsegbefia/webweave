class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]
  # before_action :authenticate_user!
  before_action :authenticate_user!, only: [:edit, :update, :destroy]


  def index
    @projects = policy_scope(Project)
  end

  def new
    @project = Project.new
    authorize @project
  end

  def create
    @project = Project.new(project_params)
    @project.user = current_user
    authorize @project
    if @project.save
      redirect_to projects_path, notice: "Project added!", status: :see_other
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    # @project = Project.find(params[:id])
    authorize @project
  end

  def edit
    authorize @project
  end

  def update
    authorize @project
    if @project.update(project_params)
      redirect_to projects_path, notice: "Project was updated."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    authorize @project
    @project.destroy
    redirect_to projects_path, status: :see_other
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :github, :url, :photo)
  end

  def set_project
    @project = Project.find(params[:id])
  end
end
