
let name='Mosh'; // String literal
console.log(name);

let firstName='Mosh';
let lastName='Hamedani';

const interestRate =0.3;
//interestRate=1;
console.log(interestRate);

let age =30 //Number literal
let isApproved=false; //boolean literal
let fName=undefined; 
let lName=null;
let selectedColor=null; 

let person={
    name:'Mosh',
    age:30

};

//Dot Notation
person.name='John';

//Bracket Notation
person['name']='Mary';



console.log(person.name);


let selectedColor2=['red','blue'];
selectedColor2[2]='1';
console.log(selectedColor2);
console.log(selectedColor2.length);


function greet(name)
{
    console.log('Hello '+''+name);


};

greet('manoj');

//Calculating a value
function square(number)
{
    return number * number;
}

square(2);

let number=square(2);
console.log(number);  


//Callback function
function operate(operationFunc,a)
{
    return operationFunc(a);
}

console.log(operate(square,2));


//Arrow Functions

// let sum=(a,b)=>
// {
//     return a+b;
// }

// console.log(sum(4,5));

let sum=(a,b)=>a+b;
console.log(sum(4,5));  

//Closures and Scope
function outer()
{
    function inner()
    {
        console.log('hello')
    }
    return inner;
}

let returnedFuncVar=outer();
console.log(returnedFuncVar);
returnedFuncVar();


//Callbacks

function fetchData(callback)
{
    setTimeout(()=>
    {
        let data='fetched data'
        callback(data,null);
       

    },5000); 
}

function handleData(data,error)
{
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(data);
    }
}

fetchData(handleData);



//Map
const nums=[1,2,3,4,5];
console.log(nums);
const doubledNums=nums.map((num)=>2*num);
console.log(doubledNums);


//Filter
const evenNums=nums.filter(num=>num%2==0);
console.log(evenNums);


//Reduce
const sum2 = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum2); // Output: 15





//Conditional Statements
let age2=16;
let name2 = age2 > 10 ? "Pedro" : "Jack";
console.log(name2);




// const name3=person.name,
// const age3=person.age
// const isMarried=person.isMarried


//The above will take so much space, this can also be written as 

//const{name3,age3,isMarried}=person;

const name3="Pedro"
const age3 =20;

//Directly add the fileds in the person object
const person2={
   name3,
   age2,
   isMarried:false,

};  

//Copy all the properties of the person object 
const person3={...person,name:"Jack"}



const names=["Pedro","Jack","Jessica"]
//Copy all the elements from names to names2 and Joel to the list 
const names2=[...names,"Joel"];



const add = (a, b) => a + b;
const calculate = (a, b, callback) => callback(a, b);
console.log(calculate(5, 3, add)); // 8


//Spread and Rest Operators: Spread for expanding arrays/objects and rest for collecting function arguments.

// const newArray = [...array, 4];
// const { name4, ...rest } = person4;

// console.log(newArray);

















 















  








 

   



 




