// log even numbers

for (let i = 1000; i >= 0; i--) {
    a = i;
    if (a%2 != 1) {
        console.log(i);
    }
}

// loop progress notifications

for (let j = 0; j <= 10000; j++) {
    if (j == 2500) {
        alert("A quarter of the way there...");
    }
    else if (j == 5000) {
        alert("Halfway there...");
    }
    else if (j == 10000) {
        alert("The loop is done!!!")
    }
}

// favorite shows array display

let showNumber;

const shows = ["\"Idoneal\"", "\"Ember\"", "\"Death\'s Messenger\"", "\"Patagonia\"", "\"In the Spotlight\""];

for (let k = 0; k < shows.length; k++) {
    showNumber = k + 1;
    console.log("My #" + showNumber + " favorite show is " + shows[k] + ".");
}