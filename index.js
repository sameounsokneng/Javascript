//variable(var,let,const)
//varប្រកាសជា global bror doy seri change kor ban ot dor ban
//letប្រកាសជា block(ot ach bro kas 2 dong ban te)
//contst limit duj ng let តម្ល់ៃដែលយើងប្រកាសអត់អាចប្តូរបានទេ​ ប្រកាសវាហើយត្រូវអោយតម្លៃវាជានិចបើអត់នោះវានឹងerror
//c++and c cos pi JS (variable)
//variable js oy vea jea ng ot duj c and c++ te char for ah sor inti number
//syntasx tyescript: var or let or const(name)...:<-jea typescript
var name='sok';
let id = 1001;
const pi = 3.14;
console.log(`ID = ${id}` );
//detatype:
/*
-number
-string
-boolean
-array
-function
*/
/*
-if else:(if-condition)? statement-if: statement-else;
-if else if else:
(if-condition)? statement-if
:(else-if-condition)? statment-sels-if
:(else-of-condition)? statment-else-if
:statment-else
*/
//function(none-return & return-function)
function sum(){
    let a=10,b=20;
    //console.log('A+B=$(a+b)');
    return a+b;
}
console.log(sum());
function division(x,y){
    return x/y;
}
division(10,5);
/*
Data type in js
-number(int,float)
-string
-boolean
-function
-array
-object
*/ 
const sum= function(){
    return 10+20;
}
console.log(sum());//30
const sayHello= function(){
    console.log("Hello JS");
}
sayHello();
const firstArray= [1,2,3,4,5];
const secondArray= new Array (10,20,30,40,50);
console.log(firstArray[3]);

//array function/method
//at()
console.log(firstArray.at(2));

//concat()
const newArray = firstArray.concat(secondArray);
console.log(newArray);

//filter():high-order function
const filtedArray =secondArray.filter(function(e){
    return e > 30;
});
console.log(filtedArray);

//find()& findIndex() 40,50
const foundItem =secondArray.find(function(e){
    return e ==30;
});
console.log(foundItem);

//forEach
firstArray.forEach(function(e,i,a){
    console.log(e);
});

//include()
const isIncluded = secondArray.includes(30,4);
console.log(jsIncluded);

//join
const joinedArray = secondArray.join('');
console.log(joinedArray);

//lenght
console.log(secondArray.length);

//map
const mappedArray = secondArray.map(function(e){
    return e * 30;
});
console.log(mappedArray);

//pop
secondArray.pop();
console.log(secondArray);
secondArray.unshift(200);
console.log(secondArray);
secondArray.splice(1,1,1000,2000);
console.log(secondArray);

//