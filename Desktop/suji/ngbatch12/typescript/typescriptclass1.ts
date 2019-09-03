let test_Fn = (a,b) => {
    console.log(this)
}
test_Fn(10,20);

let obj ={
    work: () => {
        console.log(this);
        let testFn = () =>{
            console.log(this);
        }
        testFn();
    },
}