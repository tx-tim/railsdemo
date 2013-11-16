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
    @services = ["Pawn Loans", "Auto Equity Loan", "Cash Advance", "Preowned Merchandise", "Check Cashing", "Prepaid Debit Cards", "Money Orders", "Insurance", "Gold Purchase", "Money Transfer", "Income Tax" ]
    @brands = ["Cash America", "SuperPawn", "Cashland", "Payday Advance"]
    render layout: "one_column_content"
  end

  def store_locator_simple
    @services = ["Pawn Loans", "Auto Equity Loan", "Cash Advance", "Preowned Merchandise", "Check Cashing", "Prepaid Debit Cards", "Money Orders", "Insurance", "Gold Purchase", "Money Transfer", "Income Tax" ]
    @brands = ["Cash America", "SuperPawn", "Cashland", "Payday Advance"]
    render layout: "one_column_content"
  end

  def pawn_loans
    render layout: "two_column_content"
  end

  protected
    def get_params

        @search_class = params[:search_class]

    end
end
