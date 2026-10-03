function sayHello(name) {
    console.log("Hello " + name);
}
sayHello('Rishi');

setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
}, 2000);   

setInterval(function() {
    console.log("This message is displayed every 3 seconds");
}, 3000);

clearInterval(setInterval(function() {
    console.log("This message is displayed every 3 seconds");
}, 3000));
