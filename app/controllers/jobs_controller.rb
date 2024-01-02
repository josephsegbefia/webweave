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

  private

  def job_params
    params.require(:job).permit(:job_title, :description, :job_id, :employer_name, :date_posted, :valid_until, :application_url, :job_employment_type, :job_country, :job_city, :job_qualifications, :job_responsibilities)
  end
end
