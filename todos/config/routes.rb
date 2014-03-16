Todos::Application.routes.draw do
  root "todos#new"

  resources :todos, only: [:create, :delete, :update, :index]
end
