class TodosController < ApplicationController
	
	def index
		@todos = Todo.all
		render json: @todos
	end

	def new
		render(:new)
	end

	def create
		@todo = Todo.create(task: params[:task])
		render json: @todo
	end
end