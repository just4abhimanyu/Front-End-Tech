
interface Person{

    name : string;
    phone : number;
}

function displayDetails(person : Person){
    console.log("Hello "+person.name+" has no "+person.phone)
}
var obj1 = {name :"abhi",phone : 8984888888}
displayDetails(obj1) // Hello abhi has no 8984888888

var obj2 = {name :"abhi"}

//displayDetails(obj2) // compile time error bcz number is mandatory of person class
// if you want to make phone number optional then modify phone number attribute as (phone ?: number)
//displayDetails(") // error bcz argument type is person class but passing string