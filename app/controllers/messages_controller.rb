class MessagesController < ApplicationController
  def index
    @messages = Message.includes(:user).order("id DESC")
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      respond_to do |format|
        # format.html { redirect_to root_path }
        format.json
      end
    else
      render :index
    end
  end

  private
  
  def message_params
    params.permit(:content).merge(user_id: current_user.id)
  end 
end
