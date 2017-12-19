class Api::SkillsController < ApplicationController

  def index
    @skills = Skill.where('user_id=?', params[:id])
    render :index
  end

  def create
    @skill = Skill.new(skill_params)

    if @skill.save
      render :show
    else
      render(
      json: ["Missing required fields"],
      status: 401
      )
    end
  end

  def show
    @skill = Skill.find(params[:id])

    if @skill
      render :show
    else
      render(
      json: ["Error"],
      status: 404
      )
    end
  end

  def skill_params
    params.require(:skill).permit(:skill, :user_id)
  end



end
