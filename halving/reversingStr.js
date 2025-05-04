let str = "cow";

function reverseStr(str){
  return str.split('').reverse('').join('');
  //split() urns the string into an array of characters:['c','o','w']
  //reverse() reverses the array
  //joins back the characters into a string
}
console.log(reverseStr(str));