"use strict";
// Every .ts file is one module
Object.defineProperty(exports, "__esModule", { value: true });
//var obj1  = new Person("alpha","bodh gaya",987463773);
/**
 * obj1 giving error because not able to find Person class
 *so to access, now making Person as export and here have to import as below
 */
var FunctionInClass_1 = require("./FunctionInClass");
var obj1 = new FunctionInClass_1.Person("alpha", "bodh gaya", 987463773);
obj1.display();
(0, FunctionInClass_1.show)();
/**
 * node Modules.js it will give o/p like
 * Hello abc
 * Hello alpha
 * why because we are loading FunctionInClass file so that function
 * call also give output .. so display calling two times
 *
 * above, we can see that we can import any class , method or function as many we can
 * and call them
 *
 */ 
