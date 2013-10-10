require 'test_helper'

class CaControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get tcl" do
    get :tcl
    assert_response :success
  end

  test "should get tcp" do
    get :tcp
    assert_response :success
  end

end
