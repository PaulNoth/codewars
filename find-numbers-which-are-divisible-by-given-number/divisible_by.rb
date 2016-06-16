def divisible_by(numbers, divisor)
  numbers.select {|num| num % divisor == 0}
end
