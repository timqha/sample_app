module API
  class UsersController < ApplicationController
    before_action :signed_in_user, only: [:index, :edit, :update, :destroy, :following, :followers]
    before_action :correct_user, only: [:edit, :update]
    before_action :admin_user, only: :destroy

    respond_to :json

    def new
      @user = User.new
      render json: @user, status: :ok
    end

    def show
      @user = User.find(params[:id])
      @microposts = @user.microposts.all
      respond_to do |format|
        format.json  { render :json => { :user => @user,
                                         :microposts => @microposts }}
      end
    end

    def index
      #@users = User.paginate(page: params[:page])
      @users = User.all
      respond_to do |format|
       # format.html  # index.html.erb
        format.json  { render :json => @users }
      end
    end

    def create
      @user = User.new(user_params)
      if @user.save
        sign_in @user
        render json: @user, status: :ok
      else
        render json: {user: @user.errors, status: :no_content}
      end
    end

    def edit
    end

    def update
      if @user.update_attributes(user_params)
        flash[:success] = "Profile updated"
        render json: @user, status: :ok
      else
        render json: {user: @user.errors, status: :no_content}
      end
    end

    def destroy
      User.find(params[:id]).destroy
      render json: {status: :ok}
    end

    def following
      @title = "Following"
      @user = User.find(params[:id])
      @users = @user.all

      respond_to do |format|
        format.json { render :json => { :title => @title,
                                        :user => @user,
                                        :users => @users }}
      end
    end

    def followers
      @title = "Followers"
      @user = User.find(params[:id])
      @users = @user.all
      respond_to do |format|
        format.json { render :json => { :title => @title,
                                        :user => @user,
                                        :users => @users }}
      end
    end

    private
      def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation, :admin)
      end

      def signed_in_user
        if signed_in?
          store_location
          redirect_to signin_url, notice: "Please sign in."
        end

        def correct_user
          @user = User.find(params[:id])
          redirect_to(root_url) unless current_user?(@user)
        end

        def admin_user
          redirect_to(root_url) unless current_user.admin?
        end
      end
  end
end