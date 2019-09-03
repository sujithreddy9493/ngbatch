console.log("testNum","testNum");
 var testNum = 10;
let name_3 = "suji"
console.log(name_3);
//for(let i=0; i<10; i++){
  //  setTimeout(function(){
   //    console.log(i); 
    //}, 1000)
//}
function printOut(i){
    setTimeout(function(){
        console.log(i);
    }, 1000)
}
for(var i=0; i<10; i++){
    printOut(i);
}
var divEl = document.getElementsByTagName('div')[0];
var data =['suji', 'sree';]
divEl.click = run(data);
function run(data){
    return function(e){
        console.log("name:",data[0],e);
    }
}
const num1=20;
console.log(num1);
let obj1 = {
    name:"hara";
}
obj1.name="sujithreddy";
const arr3=[10,20,30,""];
arr3.push(40);
arr3.push("p.s");
arr3.unshift(0);
let poppedItem1 = arr3.pop();
let shiftedItem1 = arr3.shift();
const arr4 = [15,25,35,""];
arr4.splice(4,1,40);
arr4.splice(3,1,20);
var arr5 = arr4.slice(3,1);
let test_2 =() =>{
    console.log('arrow function');
    console.log(this);
    return function(){
        console.log("test");
    }
}
//test_2();
//
//
function interconnect(data:string, b:number){
    console.log(typeof data);
    data = "nameDetails";
    console.log(typeof data);
}
interconnect("content",10);
interconnect(10,20);

let dataInfo1:string[] =["suji","nani"]
let details1:[string,string] = ["",""]
let name_4:string,number;
name_4 = 10;
console.log("name",name_4);

let test_fn:() =>string;
test_fn = "ss";
test_fn = () =>{
    return "10";
}

let obj_2:{name:string, age:number}
obj_2 ={
    name:"sis";
    age: 23;
}

let arr_2:[string,number] = ["April", 20]
arr_2.push(09);

let test_fn2:() => Array<string>
test_fn2 = () =>{
    console.log("suma");
    return ["test data"]
}
let fnDef1 = (a) => a*3;
console.log(fnDef1(10));

interface empolyeeDetails{
    name:string;
    age:number;
    adhaarNo:number;
    phone:number;
    bloodgroup:string;
    email:string;
    salary:number;
    city?:string;
    [key:string]:any;
}
var detailsOfTheEmployee : employeeDetails[];
detailsOfTheEmployee=[{
    name:"suji";
    age:23;
    adhaarNo:967618847962;
    phone:9493580957;
    bloodgroup:"A+";
    email:"sujithreddy09101996@gmail.com";
    salary:25000;
    city:"hyderabad";
    address:"nellore";

}]