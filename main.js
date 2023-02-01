let x = [ 1, 3, 4, 6]
let y = [ 1, 4, 5, 5]
function faltr(x,y){
    if(x == y)
    {console.log(true)
    return true;}
    else if(x !== y) {
        console.log(false)
        return false;
    }
}
faltr()




function countChar(string, ch) {
    let coun = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        coun += 1;
      }
    }
    return coun;
  }
  function countB(string) {
    return countChar(string, "B");
  } 
  console.log(countB("big"));
  console.log(countChar("verybig"));


  
  
const ar1 = 223;
const ar2 = 213;


function twoMass (a, b) {
    if (ar1 < ar2) return ar1;
    else return ar2;
  }
  
  console.log(twoMass());
 




  