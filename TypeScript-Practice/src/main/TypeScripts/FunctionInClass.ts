export class Person{
    name : string;
    city : string;
    phone : number;

    constructor(uname : string , city : string , phoneNumber : number) {
        this.name = uname;
        this.city = city;
        this.phone = phoneNumber;
    }
    public display(){
        console.log("Hello "+this.name)
    }
}
export  function show() {
    console.log("Hello Show")
}

var person = new Person("abc","BBSR",9893873823)
person.display() // Hello abc