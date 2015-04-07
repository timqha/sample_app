module API
  class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    respond_to :json, :html
    def new
      render json: {status: :ok}
    end

    def create
      user = User.find_by(email: params[:email])
      if user #&& user.authenticate(params[:password])
        #sign_in user
        render json: user, status: :ok
      else
        render json: {user: user.errors, status: :no_content}
      end
    end

    def destroy
      sign_out
      render json: {status: :ok}
    end
  end
end