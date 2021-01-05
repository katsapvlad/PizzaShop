class AddProducts < ActiveRecord::Migration[6.1]
  def change
  		Product.create :title => 'Havaiian', :description => 'This is Havaiian Pizza!', :price => 350, :size => 30,	:is_spicy => false, :is_veg => false, :is_best_offer => false,	:path_to_image => '/images/havai.jpeg'

  		Product.create :title => 'Pepperoni', :description => 'This is Pepperoni Pizza!', :price => 400, :size => 30,	:is_spicy => false, :is_veg => false, :is_best_offer => true,	:path_to_image => '/images/peperoni.jpeg'

  		Product.create :title => 'Vegetarian', :description => 'This is Vegetarian Pizza!', :price => 350, :size => 30,	:is_spicy => false, :is_veg => true, :is_best_offer => false,	:path_to_image => '/images/veg.jpeg'

  end
end
