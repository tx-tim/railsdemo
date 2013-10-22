class CashamController < ApplicationController
  layout false
  before_action :get_params

  def index
  end

  def tcl
  	render layout: "two_column_landing"
  end

  def tcc
  	render layout: "two_column_content"
  end

  def ocl
  	render layout: "one_column_landing"
  end

  def occ
  	render layout: "one_column_content"
  end

  def store_locator
    render layout: "one_column_content"
  end

  protected
    def get_params

        @search_class = params[:search_class]

    end
end
