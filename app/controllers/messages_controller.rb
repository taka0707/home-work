class MessagesController < ApplicationController
  def index
    @messages = Message.includes(:user)
    # binding.pry
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to root_path
    else
      render :index
    end
  end

  private
  
  def message_params
    params.permit(:content).merge(user_id: current_user.id)
  end 
end
