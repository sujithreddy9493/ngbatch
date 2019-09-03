console.log("testNum","testNum");
var testNum =10;
let name_1 = "suji";
console.log(name_1);
function printOut(i){
    setTimeout(function(){
        console.log(i);
    }, 1000)
}
for(var i=0; i<=10; i++){
    printOut(i);
}


//for(let i=0; i<=10; i=i+1){
  //  setTimeout(function(){
    //    console.log(i);
   // }, 1000)
//}
var divEl = document.getElementsByTagName('div')[0]
var data =['ravi', 'krishna'];
divEl.onclick = run(data);
function run(data){
    return function(e){
        console.log("name:",data[0],e);
    }
}
const num = 10;
console.log(num);
let obj ={
    name:"nani"
}
obj.name = "sujithreddy"
const arr =[10,20,30,""]
arr.push(40)
arr.push("ravi");
arr.unshift(0);
let poppedItem = arr.pop();
let shiftedItem = arr.shift();

const arr1 =[15,25,35,"",45]
arr1.splice(3,1,40);
arr1.splice(5,1,50);
var arr2 = arr1.slice(2,3);
let test_1 =() => {
    console.log('arrow function');
    console.log(this);
    return function (){
        console.log("test")
    }
}
test_1();