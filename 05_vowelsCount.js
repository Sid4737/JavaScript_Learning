var sentence = " Yes Just do it man,  I know you can";
//print the vowels only i.e aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
   var char = sentence.charAt(index);
   var charCopy = char.toLowerCase();
   if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u' ) {
       
       console.log(char);
       counter = counter + 1;
    }

   }
     console.log(`Total vowels in string is : ${counter}`);
    
     console.log(`======= revers string  ==========`);
     var reverseString = "";
     var lastCharPosition = sentence.length-1;
     for (let index = lastCharPosition; index >=0 ; index--) {
        var char = sentence.charAt(index);
        reverseString = reverseString.concat(char);
        
    }
      console.log(reverseString);

      console.log(`==== Reverse string by removing spaces ======`);
      var reverseString = " ";
      var lastCharPosition = sentence.length - 1;
      for (let index = lastCharPosition; index >= 0; index--) {
        var char = sentence.charAt(index);
        if (char !== " ") {
          reverseString = reverseString.concat(char);
        }
      }
      console.log(reverseString);

      console.log(` ===== print 5 in 1000 times by using while loop ======`);
      var counter = 1;
      while (counter<=1000) {
               console.log(5);
               counter = counter +1;
      }
