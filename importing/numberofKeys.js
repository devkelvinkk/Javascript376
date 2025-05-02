const objectA = {
  BMW: 12,
  Mercedes: 10,
  Demio: 2,
  Atenza: 5,
}

function numberOfKeys(objectA){
  return Object.keys(objectA).length;
}

module.exports = numberOfKeys;
console.log(numberOfKeys(objectA));