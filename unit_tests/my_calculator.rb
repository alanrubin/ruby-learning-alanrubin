require "my_math"

class MyCalculator
  def initialize(math = MyMath)
    @math = math
  end
  
  def add(left,right)
    @math.run("#{left}+#{right}")
  end
end