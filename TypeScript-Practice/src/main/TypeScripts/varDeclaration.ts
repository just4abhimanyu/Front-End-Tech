
var x = 30 ;
let y = 30;
//case 1
if (x == 30){
    var res = x + 40;
}
console.log("res :"+res) // op= 70
//case 2

if (x == 30){
    let letres = x + 40;
    console.log("let Res = "+letres)
}
//console.log("let res :"+letres)
/** letres is block level variable, that cant
 be access outside of block

 var create file level scope
**/

const c = 100;
