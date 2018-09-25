var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var object = { [key]: 1 }
  var newObj = Object.assign( {}, object, { [key]: 1 } )

  newObj

  delete newObj.key

  newObj

  object
}
