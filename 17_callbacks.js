function do_assignment(callback){//prashant
    console.log("I am doing assignment & it is done now...");
    callback();
}

function copy_assignment (){// rohit
console.log("Hey bro.Thank you. Let me copy");
}

do_assignment(copy_assignment);


function display(){
    console.log("display function");
}

setTimeout (display,4000);

setInterval(display,2000);
