class JobsController < ApplicationController


  def index
    @jobs = policy_scope(Job)
  end

  def create
    @job = Job.new(job_params)
    @job.user = current_user
    authorize @job
    if @job.save
      redirect_to jobs_path, notice: "Job saved!", status: :see_other
    else
      redirect_to dashboard_path, status: :unprocessable_entity
    end
  end
end
