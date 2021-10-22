class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username 
      t.string :email
      t.integer :followers
      t.integer :followingrak

      t.timestamps
    end
  end
end
