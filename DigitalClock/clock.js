const clock = document.getElementById("clock");
let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerText = date.toLocaleTimeString();
},1000);  //after 1 ms
// set interval ko ek interval bata do to vo usi interval ke baad apne aap ko repeat karta h we use this to do such small work
