
var greet = "Good Morning bro and sis  ";
console.log(greet);

var count = greet.length;
console.log(count);
console.log(greet.length);

console.log("===========charAt==================");

var charAt = greet.charAt(8);
console.log(charAt);

console.log(greet.charAt(8));

console.log("===========indexof==================");

var char = greet.indexOf('o');
console.log(char);

console.log(greet.indexOf("bro"));

console.log("============concat=================");

var fName = "Virat";
var lName = "Kohli";

var result = fName.concat( " ","Prem"," ",lName); 
console.log(result);

console.log("============replace()=================");

var greet = "Good Morning bro and sis";
var replaceDemo = greet.replace("Morning","evening");
console.log(replaceDemo);

console.log("============Upper case=================");
console.log(replaceDemo.toUpperCase());

console.log("============Lower case=================");
console.log(replaceDemo.toLowerCase());

console.log("============trim()=================");

var greet = "   Good Morning bro and sis  ";
console.log(greet.length);
var trimResult = greet.trim();
console.log(trimResult.length);

console.log("============Endtrim()=================");

var greet = "   Good Morning bro and sis      ";
console.log(greet.length);
var trimEnd = greet.trimEnd();
console.log(trimEnd.length);

console.log("============trimStart()=================");
var greet = "   Good Morning bro and sis      ";
console.log(greet.length);
var trimStart = greet.trimStart();
console.log(trimStart.length);

console.log("============includes()=================");
var greet = "Good Morning bro and sis";
console.log(greet.includes("bro"));

console.log("============substring()=================");
var greet = "Good Morning bro and sis";
console.log(greet.substring(8));
console.log(greet.substring(13, 17));

console.log("============slice()=================");
var greet = "Good Morning bro and sis";
console.log(greet.slice(13));
console.log(greet.slice(13, 17));

console.log("============split()=================");
var studentList = "Sunil , Anil, Andy, Jenny, Lata";
var splitResult = studentList.split(",");
console.log( splitResult);

console.log("=====================================");

var impQuote = `"Do or die" this attitude is very important for this training`;
console.log(impQuote);

console.log(`========Variable substitution==========`);
var fName = "Virat";
var lName = "Kohli";

// First Name:${fName}  Last Name:${lName}

console.log(`First Name: ${fName}  and  Last Name: ${lName} `);

console.log("=============words count by split method======");

var res = "Hey you are doing good keep it up";
var endWith = res.endsWith("up");
console.log(endWith);
var startWith = res.startsWith("Hey");
console.log(startWith);
var boolean = res.endsWith("are");
console.log(boolean);
var stepSplit = res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length);

console.log("========================");
var givenString = "Hey you are doing good keep it up";
console.log(`2. Length of Given String is: ${givenString.length}`);

 








