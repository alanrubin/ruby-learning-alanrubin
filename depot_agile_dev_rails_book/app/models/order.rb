class Order < ActiveRecord::Base
  
  PAYMENT_TYPES = [
    #  Displayed       stored in db
    [ "Check",          "check" ],
    [ "Credit card",    "cc" ],
    [ "Purchase order", "po" ]
  ]

  validates_presence_of :name, :address, :email, :pay_type
  validates_inclusion_of :pay_type, :in => 
    PAYMENT_TYPES.map {|disp, value| value}
  
  has_many :line_items
  
  def build_from_cart(cart)
    line_items << LineItem.from_cart(cart)
  end

end

