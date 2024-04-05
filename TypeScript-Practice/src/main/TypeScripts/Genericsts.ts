

function  reverse<T>(items : T[]){
    var revNo = [];
    for (var i = items.length -1 ; i >=0  ; i--){
        revNo.push(items[i]);
    }
    return revNo;
}

var numArray = [1,2,3,4,5];
var reversedNum = reverse(numArray);
console.log("Reversed number = "+reversedNum)

var stringArray = ["abhi","manu","abc","xyz","mno"];
var reversedString = reverse(stringArray);
console.log("Reversed String = "+reversedString)
/**
 * by making function as generic we can pass any type of value
 */


