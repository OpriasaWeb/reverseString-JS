function solution(str){
  
  //   Declare variable string
    var reverseString = '';
    
  //   For loop
    for(let i = str.length - 1; i >= 0; i--){ // ++ = +1 / -- = -1
  //     reverseString = reverseString + str[i];
      reverseString += str[i];
  //     dlrow
    }
    
    return reverseString;
    
  }
  
  console.log(solution('world'));