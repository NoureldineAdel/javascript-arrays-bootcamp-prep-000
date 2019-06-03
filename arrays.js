var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(list, element){
  var ok = list.unshift(element)
  return ok
}
function destructivelyAddElementToBeginningOfArray(list, element){
  list.unshift(element)
  return list
}
function addElementToEndOfArray(list, element){
  var ok = list.push(element)
  return ok
}
function destructivelyAddElementToEndOfArray(list, element){
  list.push(element)
  return list
}
function accessElementInArray(list, element){
  return list[element]
}
function destructivelyRemoveElementFromBeginningOfArray(list){
  list.shift()
  return list
}