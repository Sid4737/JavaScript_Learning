console.log("5 object for Vehicle Class============>");
class Vehicle{                                                       //V must be capital
    constructor(vName, vColour, vSpeed, vseats,vPayloadCpacity){
        this.vName=vName;
        this.vColour = vColour;
        this.vSpeed = vSpeed;
        this.vseats=vseats;
        this.vPayloadCpacity = vPayloadCpacity;


    }
    details(){
        console.log(`Vehicle Details: ${this.vName}  ${this.vColour}  ${this.vSpeed}  
         ${this.vseats}   ${this.vPayloadCpacity}`);
    }

}
let bus = new Vehicle("Bus","Gray","60 Kmph","24-26 seats not more","3600 pounds")
console.log(bus);
let Bolero= new Vehicle("Bolero-B4UZ"," Diamon-white","117 kmph","7-9 not more","1015 kgs")
console.log(Bolero);
let train= new Vehicle("Train","Black","180 kmph","20 passenger half coach","65 Tons")
console.log(train);
let tractor=new Vehicle("Tafe","red-black","18 kmph","not more than 2","8000 kg")
console.log(tractor);
let auto=new Vehicle("Auto","yello-black","953 kmph","min 4","500-1000kg")
console.log( auto);
console.log("4 object for college  Class============>");

class college{
    constructor(cName,cPlace,cStaff,cSubject,cTrade){
this.cName=cName;

this.cPlace=cPlace;
this.cTrade=cTrade;
this.cStaff=cStaff;
this.cfacility=this.cfacility;

    }
    details(){
        console.log(`College Details: ${this.cName}  ${this.cPlace}  ${this.cTrade} ${this.cStaff}  
         ${this.cfacility}  `);
    }

}
let clg1=new college("KBP","Pandharpur","E&TC,CSE,MECH,CIVIL","60","Provide good")
console.log(clg1);
let clg2=new college("SKN","Solapur","CSE,MECH,CIVIL","50","Best")
console.log(clg2);
let clg3=new college("FabTech","Sangola","CSE,E&TC,MECH","40","Good")
console.log(clg3);
let clg4=new college("SWERI","Gopalpur","CES,E&TC,CIVIL,Electrical","50","Best")
console.log(clg4);

console.log("Function traverse_object=================>");
function traverse_object(factoryName,fPlace,PeoplesforWork,Producd){
this.factoryName=factoryName;
this.fPlace=fPlace;
this.PeoplesforWork=PeoplesforWork;
this.Producd=Producd;

}
let  coldStorage=new traverse_object("ColdStorage-ABC","Near-Pandharpur","Avg-100","MIlk,Kismis")
console.log(coldStorage);

let h1=new traverse_object("Sonai","kolhapur","Avg-60","ghee,butter")
console.log( h1);
console.table(h1);

//Q4 Fiboncci series
let n1 = 0, n2 = 1, nextTerm;

console.log('==========Fibonacci Series 7th occurance=============>:');
var number=7;
for (let i = 1; i <= number; i++) {
    console.log(n1);

    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}



function fabo(myNumber) {
    if (myNumber == 0) {
        return 0;
    }
    if( myNumber == 1) {
        return 1;
    }
    let fN = 0; sN=1; nextN = fN + sN;

    for (let index = 0; index < myNumber; index++) {
        fN = sN;
        sN = nextN;
        nextN = fN + sN;
        console.log(nextN);
    }
}

fabo(5);