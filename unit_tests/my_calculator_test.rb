require "test/unit"

require "my_calculator"
require "rubygems"
require "mocha"

class TestMyCalculator < Test::Unit::TestCase
  def test_addition
    MyMath.expects(:run).with("2+2").returns(4)
    cal = MyCalculator.new()
    assert_equal(4, cal.add(2,2))
  end
end