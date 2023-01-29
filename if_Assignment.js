
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

  console.log("============ ============= ====================== =========");

    function gradeCalculation(marks){
      if (marks<=0 || marks>100) {
        console.log(`Please provide the valid marks`);
         }

      if (marks>=90 && marks<100) {
        console.log(`Funtastic marks : ${marks}, Your grade is A+`);
      }  
      
      if (marks>=75 && marks<90) {
        console.log(`Excellent marks ${marks}, Your grade is A`);
      }

      if (marks>=50 && marks<75) {
         console.log(`Good marks ${marks}, Your grade is B`);
        
      }

      if (marks>=35 && marks<50) {
        console.log(`Mark is ${marks}, your grade is C, Need improvement`);
        
      }
 }

  gradeCalculation(98);
  gradeCalculation(80);
  gradeCalculation(90);
  gradeCalculation(0);
  gradeCalculation(150);
  gradeCalculation(-7);
  gradeCalculation(35);
  gradeCalculation(29);
  gradeCalculation(64);
  gradeCalculation(49);