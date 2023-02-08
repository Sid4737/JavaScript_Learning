function my_function(money){
    console.log("These are my information", money);
    console.log("Anis Babu Maneri");
    return "Addition value"
}

var veg=my_function(500)
console.log(veg);
console.log("=============================================");

function show_message(){
    console.log("Hello Everyone");
    console.log("Good Morning");
}

show_message()

console.log('==========================================');
 
function swap_values(arg1,arg2){
    console.log("========Before  Swap================");
    console.log(arg1, arg2);
    console.log("========After  Swap================");
    var temp=arg1;
        arg1=arg2;
        arg2=temp;
    console.log(arg1,arg2);    
}

swap_values("Virat", "Anushka" );
swap_values("1000", "2000" );

console.log("---------- Addition three values-------------");
function add_three_numbers(num1,num2,num3){
        console.log(num1+num2+num3 );
        return "Addition value"
}
var addition =  add_three_numbers(10.23,600,40);