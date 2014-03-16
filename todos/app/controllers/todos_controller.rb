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

	def update
		@todo = Todo.find_by_id(params[:id])
		@todo.update(complete: params[:complete])
		render json: @todo
	end

end