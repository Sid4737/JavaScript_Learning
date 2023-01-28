
votingEligibility = function(age){

     if (age<=0 || age>120) {
               console.log(`Age value : ${age}, Invalid data`);  
         }

     if (age>=18 && age<=120) {
              console.log(`your age is : ${age},You can vote`);
         }

     if (age<18 && age>0) {
        console.log(`your age is : ${age},You can not vote`);
     }    

 }
  votingEligibility(18);
  votingEligibility(45);
  votingEligibility(135);
  votingEligibility(1500);
  votingEligibility(-10);
  votingEligibility(0);