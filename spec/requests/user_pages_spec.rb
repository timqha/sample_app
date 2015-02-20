require 'spec_helper'

describe "UserPages" do

	subject {page}
  describe "signup page" do
  		before {visit signup_path}
  		it {should have content('Sign up')}
  		it {should have title(full_title('Sign up'))}
  end
end
