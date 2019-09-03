export class Engine{

    

    constructor(public engineType,private manufacturingProcess, protected transmissionSystem ){
    
    
    
        }
    
    
    
    public set value(v : string) {
    
        this.manufacturingProcess = v;
    
    }
    
    
    
    public get value() : string {
    
        return this.manufacturingProcess;
    
    }
    
    
    
    
    
    }
    
    class Bike extends Engine{
    
        constructor(et,mp){
    
            let ts = "xyz"
    
            super(et,mp,ts);
    
        }
    
     sample(){
    
            console.log(this.engineType);    
    
            console.log(this.manufacturingProcess);    
    
            console.log(this.transmissionSystem);   
    
        }   
    
    }
    
      function sample(){
    
            
    
    }
    
    let twoWheelerInfo = new Engine('twin cylinder','machinemade','hh');
    
    let twoWheeler = new Bike('twin cylinder','machinemade');
    
    //console.log(twoWheelerInfo.transmissionSystem);
    
    twoWheelerInfo.value = "lean process";
    
    console.log(twoWheelerInfo.value);