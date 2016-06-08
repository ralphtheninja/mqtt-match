module.exports = function (filter, topic) {
  const filterArray = filter.split('/')
  const length = filterArray.length
  const topicArray = topic.split('/')

  for (var i = 0; i < length; ++i) {
    var left = filterArray[i]
    var right = topicArray[i]
    if (left === '#') return true
    if (left !== '+' && left !== right) return false
  }

  return length === topicArray.length
}
