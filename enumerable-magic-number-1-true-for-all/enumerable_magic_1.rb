def all? array, &block
  for i in array
    val = yield i if block_given?
    return false if !val
  end
  return true
end
