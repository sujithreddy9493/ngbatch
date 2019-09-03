function interconnect(data:number, b:number ){
      console.log(typeof data);
      data ="nameDetails"
      console.log(typeof data);

} 
interconnect("content", 10);
interconnect(10,"20");


let dataInfo:string[] =["suji","nani"]
let details:[string,string] = ["",""]
let name_2:string;
name_2 =10;
console.log("name",name_2);

let testFn:() =>string;
testFn =10;
testFn = () =>{
    return "10";
}

let obj_1:{name:string, age:number}
obj_1 ={
    name:"krishna";
    age: 23
}

let arr_1:[number,string] =[10,"suji"]

arr_1.push(20);

let test_fn1:() => Array<string>

test_fn1= ()=>{
    console.log("ravi");
    return["testdata"]
}

function name_5<T>(data:T):<T>()=>T

let fnDef = (a) => a*3;
console.log(fnDef(10))


interface employeeDetails {
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
detailsOfTheEmployee=[
    {
        name:"suji",
        age: 23;
        adhaarNo: 967618847962;
        phone:9493580957;
        bloodgroup:"A+";
        email:"sujithreddy@gmail.com";
        salary:25000;
        city:"hyderabad"
        address:"shridihills awllyn colnoy";
    
    }
]