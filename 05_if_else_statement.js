console.log(`boom boom`);
var isRoadBlocked = false;
if (isRoadBlocked == false) {
    console.log(`Travelling thru express way`);
    console.log(`Travel will be short just for 2 hrs`);

} else {
    console.log(`Traveling thru tunnel`);
    console.log(`Travel will be long for 5 hrs`);

}

// Write a Function expression with one arg--> age to check whether he or she was eligible for voting or not.

var votingEligibility = function (age) {
    if (age <= 0 || age > 120) {
        console.log(`Invalid data : ${age}`);

    } else {
        console.log(`valid data`);

        if (age >= 18) {
            console.log(`Congratulation you can vote : ${age}`);
        } else {
            console.log(`Sory you are not eligible for vote : ${age}`);
        }
    }
}

votingEligibility(230);
votingEligibility(-20);
votingEligibility(19);
votingEligibility(16);

console.log("=========  ===============  =========================");

function isEvenOrOdd(num) {

    if ((typeof num) == "number") {
        console.log(`valid number ${num}`);
        if (num % 2 === 0) {
            console.log(`Even number`);

        } else {
            console.log(`Odd number`);
        }

    } else {
        console.log(`Invalid number ${num}`);
    }
}
isEvenOrOdd(20);
isEvenOrOdd(7);
isEvenOrOdd("30");

 