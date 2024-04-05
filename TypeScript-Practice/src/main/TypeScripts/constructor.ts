
class User1{
    name : string;
    city : string;
    phone : number;

    constructor(uname : string , city : string , phoneNumber : number) {
        this.name = uname;
        this.city = city;
        this.phone = phoneNumber;
    }
}
var user1 =  new User1("manu","gaya",7387737373);

console.log("User1 = "+user1.name +":"+user1.city+":"+user1.phone)
// ============================case 2 ============
class User2{
    /**
    name : string;
    city : string;
    phone : number; **/

    constructor(public uname : string ,public city : string ,public phoneNumber : number) {
        /**this.name = uname;
        this.city = city;
        this.phone = phoneNumber; **/
    }
}
var user2 =  new User2("abhi","blr",8983834848);

console.log("User2 = "+user2.uname +":"+user2.city+":"+user2.phoneNumber)

// private member
class User3{
    /**
     name : string;
     city : string;
     phone : number; **/

    constructor(private uname : string ,private city : string ,private phoneNumber : number) {
        /**this.name = uname;
         this.city = city;
         this.phone = phoneNumber; **/
    }


    public get Name(){
        return this.uname;
    }
    public set setName(name : string){
         this.uname = name;
    }


    public get getCity(){
        return this.city;
    }
    public set setCity(city : string){
        this.city = city;
    }


    public get getPhone(){
        return this.phoneNumber;
    }
    public set setPhone(phone : number){
        this.phoneNumber = phone;
    }
}
var user3 =  new User3("kishan","delhi",887228772);
console.log("User3 = "+user3.Name +":"+user3.getCity+":"+user3.getPhone)

user3.setCity ="patna";
user3.setName = "kiyan";
user3.setPhone = 837654567876;
console.log("User3 setter = "+user3.Name +":"+user3.getCity+":"+user3.getPhone)