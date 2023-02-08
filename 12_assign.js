console.log("========cloning using object class===========");
const sbi ={
   bankName:"State Bank of India",
   branchName:"jath",
   account_no:12334455,
   ifsc:"SBI00056",
   acc_types:"saving",
}
let bank_location={
   street:"Asangi Road",
   city:"jath",
   pin_code:"416412"
}
let sbiclone = Object.assign({}, sbi,bank_location);// deep cloning will be performed
console.table(sbiclone);
console.log("===========CLONING SEPARATE METHOD=================");

let string ={sbi,bank_location}
console.table(string);

let rate_of_interest={
   home_loan_interest:"7.20% p.a to 7.65% p.a",
   personal_loan_interest:"Between 8% p.a to 49% p.a",
   due_interest:"$ 200"
}
let sbi_details=Object.assign({},sbi,bank_location,rate_of_interest)
console.log(sbi_details);
console.table(sbi_details);
//traverse object
console.log("==========traverse object===============");
for (const index in sbi_details) {
   const element = sbi_details[index];
   console.log(element);
}