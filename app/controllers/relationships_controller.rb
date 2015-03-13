class RelationshipsController < ApplicationController
	before_action :signed_in_user

	# Смотрим кого пользователь читает, и кто читает его. После, читаем или не читаем
	# его сообщения используя соответствующий метод.
	# отвечаем на AJAX запросы и HTTP

	def create
		@user = User.find(params[:relationship][:followed_id])
		current_user.follow!(@user)

		respond_to do |format|
			format.html { redirect_to @user }
			format.js
		end
	end

	def destroy
		@user = Relationship.find(params[:id]).followed
		current_user.unfollow!(@user)

		respond_to do |format|
			format.html { redirect_to @user }
			format.js
		end
	end
end