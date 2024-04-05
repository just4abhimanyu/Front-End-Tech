var User1 = /** @class */ (function () {
    function User1(uname, city, phoneNumber) {
        this.name = uname;
        this.city = city;
        this.phone = phoneNumber;
    }
    return User1;
}());
var user1 = new User1("manu", "gaya", 7387737373);
console.log("User1 = " + user1.name + ":" + user1.city + ":" + user1.phone);
// ============================case 2 ============
var User2 = /** @class */ (function () {
    /**
    name : string;
    city : string;
    phone : number; **/
    function User2(uname, city, phoneNumber) {
        this.uname = uname;
        this.city = city;
        this.phoneNumber = phoneNumber;
        /**this.name = uname;
        this.city = city;
        this.phone = phoneNumber; **/
    }
    return User2;
}());
var user2 = new User2("abhi", "blr", 8983834848);
console.log("User2 = " + user2.uname + ":" + user2.city + ":" + user2.phoneNumber);
// private member
var User3 = /** @class */ (function () {
    /**
     name : string;
     city : string;
     phone : number; **/
    function User3(uname, city, phoneNumber) {
        this.uname = uname;
        this.city = city;
        this.phoneNumber = phoneNumber;
        /**this.name = uname;
         this.city = city;
         this.phone = phoneNumber; **/
    }
    Object.defineProperty(User3.prototype, "Name", {
        get: function () {
            return this.uname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User3.prototype, "setName", {
        set: function (name) {
            this.uname = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User3.prototype, "getCity", {
        get: function () {
            return this.city;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User3.prototype, "setCity", {
        set: function (city) {
            this.city = city;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User3.prototype, "getPhone", {
        get: function () {
            return this.phoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User3.prototype, "setPhone", {
        set: function (phone) {
            this.phoneNumber = phone;
        },
        enumerable: false,
        configurable: true
    });
    return User3;
}());
var user3 = new User3("kishan", "delhi", 887228772);
console.log("User3 = " + user3.Name + ":" + user3.getCity + ":" + user3.getPhone);
user3.setCity = "patna";
user3.setName = "kiyan";
user3.setPhone = 837654567876;
console.log("User3 setter = " + user3.Name + ":" + user3.getCity + ":" + user3.getPhone);
