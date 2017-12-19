class Api::EndorsementsController < ApplicationController

  def index
    @endorsements = Endorsement.where('user_id=?', params[:id])
    render :index
  end

  def create
    @endorsement = Endorsement.new(endorsement_params)

    if @endorsement.save
      render :show
    else
      render(
      json: ["Missing required fields"],
      status: 401
      )
    end
  end

  def show
    @endorsement = Endorsement.find(params[:id])

    if @endorsement
      render :show
    else
      render(
      json: ["Error"],
      status: 404
      )
    end
  end

  def endorsement_params
    params.require(:endorsement).permit(:skill_id, :user_id)
  end



end
