

function  display(name : string): string{

    return "Welcome "+name;
}

console.log(display('abhi'))

function show(){

}
// optional ?
function add(n1:number, n2:number,n3?:number){
    if (n3 == undefined){
        console.log(n1+n2)
    }else{
        console.log(n1+n2+n3)
    }
}
console.log(add(1,2))
console.log(1,2,3)

// default argument
function messgage(food:string, drink:string = 'pepsi'){
    console.log(`Have this tasty ${food} along with ${drink}`)
}

/**
 * default argument always should be as lat parameters
 */
console.log(messgage("Rice"))
console.log(messgage("Rice"),"water")

// rest parameter ...name
function greet(company, ...names){
    console.log(names.length)
    console.log(`${company} welcome you ${names}`)
}
greet("gita")
greet("wifi","shalini","priya","gatha")
