class StocksController < ApplicationController

  def search
    if params[:stock]
      @stock ||= Stock.new_from_lookup(params[:stock])
    end
    if @stock
      render json: @stock
    else
      render status: 404, json: { response: 'No stock exists for this symbol.' }
    end
  end
end
