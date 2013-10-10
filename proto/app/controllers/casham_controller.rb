class CashamController < ApplicationController
  layout false

  def index
  end

  def tcl
  	render layout: "two_column_landing"
  end

  def tcc
  	render layout: "two_column_landing"
  end
end
