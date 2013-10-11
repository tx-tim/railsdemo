class CashamController < ApplicationController
  layout false

  def index
  end

  def tcl
  	render layout: "two_column_landing"
  end

  def tcc
  	render layout: "two_column_content"
  end

  def ocl
  	render layout: "two_column_content"
  end

  def occ
  	render layout: "two_column_content"
  end
end
