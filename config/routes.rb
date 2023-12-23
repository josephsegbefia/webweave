Rails.application.routes.draw do
  # get 'dashboards/show'
  get '/profile', to: "profiles#show"
  get '/complete_profile', to: "pages#complete_profile"
  resources :projects
  # resources :profiles
  resources :dashboards, only: [:show]
  devise_for :users, controllers: {
    registrations: "users/registrations"
  }

  resources :users do
    resources :profiles, only: [:show, :edit, :update]
  end
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
