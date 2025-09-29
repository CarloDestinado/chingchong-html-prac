let age = 30;

/*console.log(typeof age);
console.log(`youre age is ${age}`);*/
console.log(typeof age);
if (age >= 18) {
    console.log("you can vote");
    if (age >= 21) {
        console.log("you can drink");
    }else{
        console.log("you cant drink");
    }
} else {
    console.log("you cant vote");
}


document.getElementById("h1").textContent = `youre age is ${age}`;
