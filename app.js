// function sayHello(name) {
//     console.log("Hello " + name);
// }
// sayHello('Rishi');

// setTimeout(function() {
//     console.log("This message is displayed after 2 seconds");
// }, 2000);   

// setInterval(function() {
//     console.log("This message is displayed every 3 seconds");
// }, 3000);

// clearInterval(setInterval(function() {
//     console.log("This message is displayed every 3 seconds");
// }, 3000));
function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Rishi");

setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
}, 2000);

// Store the interval ID
const intervalId = setInterval(function() {
    console.log("This message is displayed every 3 seconds");
}, 3000);

// Stop the interval after 10 seconds
setTimeout(function() {
    clearInterval(intervalId);
    console.log("Interval stopped");
}, 10000);
