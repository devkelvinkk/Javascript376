function topDouble(value,top){
  while(value * 2 < top){
    value *= 2;
  }
  return value;
}
module.exports = topDouble;
