
let c = 10 + 20 + '30';
console.log(c);        //output = 3030




let d = '10' + 20 + 30;
console.log(d);        //output = 102030





10 == '10';         //true

10 === '10';        //false





//Javascript Advantages

// Simplicity. JavaScript is relatively simple to learn and implement
//Popularity. JavaScript is used everywhere on the web.
//Gives the ability to create rich interfaces.






var a = [10, 20, 30, 40, 50];

for (let item in a) {
    //for in loop array itrate in every index position
    console.log(item);
}


for (let item in a) {

    console.log(a[item]);     //array values
}


let obj = {

    Name: "vel",
    age: 24,
    place: 'chennai'
}


for (let item in obj) {

    console.log(item);      //get Object keys 
}


for(let item in obj){

    console.log(obj[item])      //get object values
}





let b = [10,20,30,40,50];

for(let item of b){
    console.log(item)       //get array values
}


let obj1= {

    Name: "vel",
    age: 24,
    place: 'chennai'
}


for(let item of Object.values(obj1)){   //get object values
    console.log(item)
}



let array = [10,20,30,40,50]

  array.forEach(only)
                                    //output : 10,20,30,40,50
function only(data){
    console.log(data)
}





// closure 

function init(){

    var name1 = "Javascript";
    function displayName(){
        console.log(name1);
    }
     return displayName;
}
var more =init();
more()



function makeAddr(x){

    return function(y){
        return x + y ;
    }
}
var add1 = makeAddr(5);

console.log(add1(2));






//Math inbuilt method 

//1.Math.floor

a = 1.5;
b = Math.floor(a);
console.log(b);


a = 1.5;
b = Math.ceil(a);
console.log(b);


a = 2.6;
b = Math.round(a);
console.log(b);


a = 5;
b = Math.sqrt(a);
console.log(b);



b = Math.pow(5,2);
console.log(b);


