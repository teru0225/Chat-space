class MessagesController < ApplicationController
  before_action :set_params
  def index
  end

  def create
  end

  private
  def set_params
    @group = Group.find(params[:group_id])
  end
end
