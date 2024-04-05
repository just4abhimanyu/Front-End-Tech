"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(uname, city, phoneNumber) {
        this.name = uname;
        this.city = city;
        this.phone = phoneNumber;
    }
    Person.prototype.display = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
exports.Person = Person;
function show() {
    console.log("Hello Show");
}
exports.show = show;
var person = new Person("abc", "BBSR", 9893873823);
person.display(); // Hello abc
