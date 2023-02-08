console.log("step.1==================================================");
function maleMarriageEligibility (gender,age,candidate_name){
    if(gender&&age >= 21 ){
           console.log(`Hey ${candidate_name} you are eligible for Marriage`);
            }
        else {
                console.log(`Hey ${candidate_name} you are not eligible for Marriage`);
            }
}
    maleMarriageEligibility("Male",25, "Billgates");
    maleMarriageEligibility("Male",17, "Stew jobs");
 console.log("step.1==================================================");
 function FemaleMarriageEligibility (gender,age,girl_name){
    if(gender&&age >= 18 ){
           console.log(`Hey ${girl_name} you are eligible for Marriage`);
            }
        else {
                console.log(`Hey ${girl_name} you are not eligible for Marriage`);
            }
}
    FemaleMarriageEligibility("Male",16, "jenifer");
    FemaleMarriageEligibility("Male",27, "malinda gates");