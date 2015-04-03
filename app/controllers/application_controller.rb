class ApplicationController < ActionController::Base
	# Предотвращение CSRF атак вызваных исключениями.
	# Для APIs, вы можете использовать вместо :null_session.
	protect_from_forgery with: :exception
	include SessionsHelper

  def home
    render 'layouts/application'
  end
end
