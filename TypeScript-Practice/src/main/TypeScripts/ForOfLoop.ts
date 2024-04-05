
var nos = [1,2,3,4,5,6];
// simple for loop
for (var i = 0; i < nos.length; i++) {
    console.log(nos[i])
}
// for in loop (iterate through index of array )
for(var j in nos){
    console.log(nos[j]);
}
// for of loop (like enhance for loop in java, directly getting value from array)
for(var n of nos){
    console.log(n)
}
