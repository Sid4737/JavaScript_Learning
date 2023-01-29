console.log(`boom boom`);
var isRoadBlocked = false;
if (isRoadBlocked ==false) {
    console.log(`Travelling thru express way`);
    console.log(`Travel will be short just for 2 hrs`);
    
} else {
    console.log(`Traveling thru tunnel`);
    console.log(`Travel will be long for 5 hrs`);
    
}

// Write a Function expression with one arg--> age to check whether he or she was eligible for voting or not.

 var votingEligibility = function(age) {
    if (age<=0 || age>120) {
        console.log(`Invalid data : ${age}`);
        
    } else {
        console.log(`valid data`);
    }
 }

 votingEligibility(230);
 votingEligibility(-20);



 