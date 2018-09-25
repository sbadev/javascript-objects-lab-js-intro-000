var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 }
  return Object.assign({}, object, { [key]: value })
}

updateObjectWithKeyAndValue(recipes, prop2, 2);

// recipes[key] = value
// return recipes;