/*the function below counts all vowels both uppercase
in a given string*/
 let str = "counting";

 function countVowels(str){
  let count = 0;
  str=str.toLowerCase();//converts lowercase vowels to lowercase
  for(let i=0; i<str.length;i++){
    if(str[i]==='a' || str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
      count ++;
    }
  }
  return count;
 }
 console.log(countVowels(str));