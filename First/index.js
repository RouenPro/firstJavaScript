//Simple variable
var old = 98;

//With ES6 
//Constant
const me = 1;

//Let is ued if it expted to be modified
let a = 1;

//Primitive
const a = 15
const b = 'String'
const c = "String"
const d = 1.5


//Array
const a = [10,20,30]
a[0]
a[1]

//How to create object
const object_empty = {}

const objName = {
    id:1,
    name: 'keen',
    weight: 115.55
}

//Access with do notation
objName.id
objName.name
objName.weight

//Access with []
objName['id']
objName['name']
objName['weight']
//Best advantages
const key = 'weight'
obj[key]

//Netsted
const nested = {
    id: 45,
    name: 'John Nest',
    favorite: ['apple', 'orange', 'watermelon'],
    health: {
        blood: 'A+',
        weight: 115.63,
        size: [110, 160, 35]
    },
    family: [
        {type: 'father', name: "Dara Nest"},
        {type: 'mother', name: "Jenny"}
    ]
}

//to get apple
nested.favorite[0]
//to get father
nested.family[0].name



//Falsehood and Truth
//Compare eventhoug type and value
if(2 === '2'){

}

//compare only for value
if(2 == '2'){

}

if(false){
    print()
}
if(null){
    print()
}
if([]){
    print()
}
if({}){

}
if(''){

}
if(0){

}

//Values
if('a'){
    print("Having a value");
}
if(1){
    print("value");
}
if(4.5){
    print("value")
}
if(true){
    print("value")
}

//Creating Functions and Lambda, Callback
//Creating function

// 1.Normal Function
function sum_one(a, b=5){
    return a+b;
}

//Anonymous fucntion with sum as fucntion expression
const sum_body = function(a, b){
    return a+b;
}
sum_one(5,6);
sum_body(8,9);

//Lambda(Arrow Function)
const sum_one = (a, b) => {
    return a+b;
}
//shortcut way of using lampda
const sum_one = (a,b) => a + b;
//If we have only one parameter
const square = a => a*a;
//If we don't have any parameter
const getDate = () => new Date();


//Callback
const evenOdd = function(num, callback){
    if(Number.isInteger(num)){
        print("Integer")
        callback(num % 2 == 0, null)
    } else{
        callback(null, new Error(num + 'is not integer'))
    }
}

evenOdd(45, (res, err)) => {
    if(err){
        console.error(err.message)
    } else{
        console.log('result',res)
    }
}