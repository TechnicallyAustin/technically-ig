class UsersController < ApplicationController
    
    def index
        @users = User.all
        @users 
    end

    def show
        @user = User.find_by_id(params[:id])
        @user 
    end

    def edit
    end

    def update
    end

    def new
    end

    def create
    end

    def delete
    end

end
