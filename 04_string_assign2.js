console.log("--------04.String Assignment----------");
var greet="   Hey you are doing good, keep it up";
console.log(greet);
console.log("-----------------------------------------------");
console.log("Length of string");
console.log(greet.length);
console.log("-------------removing extra space----------------------------------");
var greet="   Hey you are doing good, keep it up";
var trimResult =  greet.trim();
console.log(trimResult);
console.log("-------------total number extra space  count that is removed----------------------------------");
var greet="   Hey you are doing good, keep it up";
var trimResult =  greet.trim();
console.log(trimResult.length);
console.log("-----------------------------------------------");

reverseResult= function(developer) {
    var reverseResult=developer.reverse;
    return reversString();
    
}
console.log(reverseResult(" I am angular developer"));