class MotherBoard {
    constructor(processor, ram, ports, powersupply) {
        this.powersupply = powersupply;
        this.processor = "i7";
        this.ramslot = "8gb";
        this.ports = ['hdmi', 'vga'];
        this.processor = processor;
        this.ramslot = ram;
        this.ports = ports;
    }
}
class Accessorries extends MotherBoard {
}
class PersonalComputer extends Accessorries {
    constructor(processor, ram, ports, powersupply) {
        super(processor, ram, ports, powersupply);
    }
}
class PersonalComputer1 extends Accessorries {
    constructor(processor, ram, ports, Powersupply) {
        super(processor, ram, ports, Powersupply);
    }
}
let cpu1 = new MotherBoard("i7", "16gb", ['usb', 'audio'], "smps");
let pc1 = new PersonalComputer("i7", "48gb", ['usb', 'video'], "smps");
let pc2 = new PersonalComputer1("i3", "8gb", ['powercard', 'chargeport'], "nn");
class Engine {
}
