def any? list, &block
  for i in list
    val = yield i if block_given?
    return true if val
  end
  return false
end
