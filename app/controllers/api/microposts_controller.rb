module API
  class MicropostsController < ApplicationController
    before_action :signed_in_user, only: [:create, :destroy]
    before_action :correct_user, only: :destroy
    respond_to :json, :html
    # Создаем минисообщение, для зарегистрированого пользователя, выводим инвормацию об успешном сохранении.
    # Перенаправляем на static_pages#home, в плохом случае ожидаемую переменную @feed_items оставляем путой.
    def create
      @micropost = current_user.microposts.build(micropost_params)
      if @micropost.save
        render json: @micropost, status: :ok
      else
        @feed_items = []
        render json: {micropost: @micropost.errors, status: :no_content}
      end
    end

    def destroy
      @micropost.destroy
      render json: {status: :ok}
    end

    private

    def micropost_params
      params.require(:micropost).permit(:content)
    end

    def correct_user
      @micropost = current_user.microposts.find_by(id: params[:id])
      redirect_to root_url if @micropost.nil?
    end
  end
end