Todos::Application.routes.draw do
  root "todos#index"

  resources :todos, only: [:create]
end
