
function sachin(money){
     
     console.log(" Please go in the market with Rs.:",money);
     console.log(" By some vegetables");
     return "Vegetables bag";
}

 var veg = sachin(500);
 console.log(veg);
 console.log("===========");

   function functionName(city, street, age, is_married){
   console.log(city, street, age, is_married);
   return "city + street + age + is_married "
}

  var value = functionName("Pune","Khawgalli","22","No");
  console.log(value);

console.log("==================");

 function tech(author,sign){
       console.log("this book is very good");
       console.log("the book name is brave story"); 
       return "motivational story"
 }
    var structure = tech("reader","index");
    console.log(structure);


     function swap_values(arg1,arg2){
         console.log("======Before swap=======");
         console.log(arg1,arg2);
         console.log("=======After swap=======");
         var temp = arg1;
         arg1 = arg2;
         arg2=temp;
         console.log(arg1,arg2);
 }    

      swap_values("Virat","Anushka");
      swap_values("Mango","Apple");
      swap_values(100,300);

     console.log("========Addition function======");

     function addition(arg1, arg2, arg3){
          console.log(arg1 + arg2 + arg3);

     }
         addition(200, 300, 600);
         addition("Sachin"," Ramesh"," Tendulkar")
         addition("Hello"," good"," Morning")