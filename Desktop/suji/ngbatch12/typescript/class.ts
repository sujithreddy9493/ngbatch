import { Engine } from "./accessor";
interface HardwareCPU{

    processor:string;

    ramslot:string;

    ports:string[];

}

interface Powersupply{

    smps:string;

}

class MotherBoard implements HardwareCPU, Powersupply{

    constructor(processor:string, ram:string, ports:string[], public powersupply){

       this.processor = processor;

       this.ramslot = ram;

       this.ports = ports;


    }

    processor = "i7";

    ramslot= "8gb";

    ports= ['hdmi','vga'];

}

class Accessorries extends MotherBoard{



}

class PersonalComputer extends Accessorries {

    constructor(processor:string, ram:string, ports:string[], powersupply){

        super(processor, ram, ports, powersupply)

    }
}
class PersonalComputer1 extends Accessorries{
    constructor(processor:string, ram:string, ports:string[], Powersupply){

        super(processor, ram, ports, Powersupply )

    }
    
}

let cpu1 = new MotherBoard("i7","16gb",['usb','audio'],"smps");

let pc1 = new PersonalComputer("i7","48gb",['usb','video'],"smps");

let pc2 = new PersonalComputer1("i3","8gb",['powercard','chargeport'],"nn")
class Engine{}