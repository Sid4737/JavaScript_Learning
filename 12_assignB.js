class Bank{
    constructor(bankName,location,time,account_no,interest_rate){
        this.bankName=bankName;
        this.location=location;
        this.time=time;
        this.account_no=account_no;
        this.interest_rate=interest_rate;
    }
    details(){
        console.log('Bank Details: ${this.bankName}  ${this.location}  ${this.time}  ${this.account_no}  ${this.interest_rate}');
        
        
    }
}
let bank_details=new Bank("SBI","AMG-Road","10am to 5pm","65 67 34 52 89","7% P.a")

console.table(bank_details);
let axis_bank=new Bank("Axis Bank","Sree-nagar","xxxabc","5%p.a")
console.log(axis_bank);
let sbi_bank=new Bank("SBI Bank","NB-Road","xxxnkm","5.5%p.a")
console.log(sbi_bank);
let icici_bank=new Bank("ICICI Bank","KT-Road","xxxbgt","7%p.a")
console.log(icici_bank);
let kotak_bank=new Bank("KOTAK Bank","ND-Road","xxxbst","5.5%p.a")
console.log(kotak_bank);
let hdfc_bank=new Bank("HDFC Bank","G-Road","xxxadt","10 %p.a")
console.log(hdfc_bank);
let panjab_bank=new Bank("PUNJAB Bank","Np-Road","xxxvgt ","9 %p.a")
console.log( panjab_bank);
const bank=[axis_bank.bankName,sbi_bank.bankName,icici_bank.bankName,
    kotak_bank.bankName,hdfc_bank.bankName,panjab_bank.bankName]
    console.log("Bank name:",bank);
    console.table(bank);
    const location=[axis_bank.location,sbi_bank.location,icici_bank.location,kotak_bank.location,hdfc_bank.location
    ,panjab_bank.location]
    console.log("Location:",location);
   console.table(location); 

let array=[bankName,location,time,account_no,interest_rate]
