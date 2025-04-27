function removeOccurrences(array, num) {
  for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === num) {
          array.splice(i, 1);
      }
  }
}

module.exports = removeOccurrences;
