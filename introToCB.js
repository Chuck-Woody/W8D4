// // PART 1
// class Clock {
//     constructor() {
//         // 1. Create a Date object.
//         // 2. Store the hours, minutes, and seconds.
//         // 3. Call printTime.
//         // 4. Schedule the tick at 1 second intervals.
//         this.time = new Date();

//         this.hour = this.time.getHours();
//         this.minute = this.time.getMinutes();
//         this.second = this.time.getSeconds();

//         this.printTime();
//         setInterval(this._tick.bind(this), 1000);
//     }
    
//     printTime() {
//         // Format the time in HH:MM:SS
//         // Use console.log to print it.
//         console.clear();
//         console.log(`Current Time: ${this.hour.toString().padStart(2, '0')}:` +
//             `${this.minute.toString().padStart(2, '0')}:` +
//             `${this.second.toString().padStart(2, '0')}`);
//     }
        
//     _tick() {
//         // 1. Increment the time by one second.
//         // 2. Call printTime.
//         this.second += 1
//         if (this.second % 60 === 0) {
//             this.second = 0;
//             this.minute += 1;
//             if (this.minute % 60 === 0) {
//                 this.minute = 0;
//                 this.hour += 1;
//                 if (this.hour % 24 === 0) {
//                     this.hour = 0;
//                 }
//             }
//         }
//         this.printTime();
//     }
// }
  
// // const clock = new Clock();

// // // PART 2
// // const readline = require("readline");
// // const reader = readline.createInterface({
// //     input:process.stdin,
// //     output:process.stdout,
// // });

// // function addNumbers(sum, numsLeft, completionCallback) {
// //     if (numsLeft > 0) {
// //         const response = reader.question("Enter a number: ", res => {
// //             sum += parseInt(res);
// //             numsLeft -= 1;
// //             console.log(`${sum} is your sum :)`);
// //             addNumbers(sum, numsLeft, completionCallback);
// //         });
// //     } else {
// //         console.log(completionCallback(sum));
// //         reader.close();
// //     }
// // }

// // addNumbers(0, 3457, sum => console.log(`Total Sum: ${sum}`));

// // Phase 3

// // Function.prototype.myBind = function(context) {

    
// //     return (example => { this.apply(context) } )
// // }

// // class Lamp {
// //     constructor() {
// //         this.name = "a lamp";
// //     }
// // }
  
// // const turnOn = function() {
// //     console.log("Turning on " + this.name);
// // };
  
// // const lamp = new Lamp();

// // //   turnOn(); // should not work the way we want it to
  
// // const boundTurnOn = turnOn.bind(lamp);
// // const myBoundTurnOn = turnOn.myBind(lamp);
  
// // //   boundTurnOn(); // should say "Turning on a lamp"
// // //   myBoundTurnOn(); // should say "Turning on a lamp"

// //Phase 4

// const readline = require("readline");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Write this first.
// function askIfGreaterThan(el1, el2, callback) {
//     // Prompt user to tell us whether el1 > el2; pass true back to the
//     // callback if true; else false.
//     const response = reader.question(` Is ${el1} greater than ${el2}? B^) : `, ans => {
//         if (ans === "yes") {
//             callback(true);
//         } else if (ans === 'no') {
//             callback(false);
//         }
//         else {
//             console.log("maidenless loser dB^)");
//         }
//     });
// }

// // Once you're done testing askIfGreaterThan with dummy arguments, write this.
// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//     // Do an "async loop":
//     // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
//     //    know whether any swap was made.

//     if (i === arr.length - 1) {
//         outerBubbleSortLoop(madeAnySwaps);
//     } else {
//         askIfGreaterThan(arr[i], arr[i + 1], function(ans) { 
//             if (ans) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//                 madeAnySwaps = true;
//             }
//             innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
//         });
//     }
//     // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
//     //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
//     //    continue the inner loop. You'll want to increment i for the
//     //    next call, and possibly switch madeAnySwaps if you did swap.
// }

// // Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// // Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

// function absurdBubbleSort(arr, sortCompletionCallback) {
//     function outerBubbleSortLoop(madeAnySwaps) {
//         // Begin an inner loop if you made any swaps. Otherwise, call
//         // `sortCompletionCallback`.
//         if (madeAnySwaps) {
//             innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
//         } else {
//             sortCompletionCallback(arr);
//         }
//     }
//     // Kick the first outer loop off, starting `madeAnySwaps` as true.
//     let madeAnySwaps = true;
//     outerBubbleSortLoop(madeAnySwaps);
// }

// absurdBubbleSort([3, 2, 1], function(arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// Phase 5

Function.prototype.myThrottle = function(interval) {
    let tooSoon = false;
    let oldThis = this;
    // return;
    return function() {
        if (!tooSoon) {

            tooSoon = true;
            oldThis();
            setTimeout(function() {
                tooSoon = false;
            }, interval);
        } 
    }
}

class Neuron {
    constructor() {
        this.fire = this.fire.myThrottle(500);
    }
  
    fire() {
        console.log("Firing!");
    }
}

// neuron = new Neuron()

class SearchBar {
    constructor() {
        this.query = "";

        this.type = this.type.bind(this);
        this.search = this.search.bind(this);
    }

    type(letter) {
        this.query += letter;
        this.search();
    }

    search() {
        console.log(`searching for ${this.query}`);
    }
}

const searchBar = new SearchBar();

const queryForHelloWorld = () => {
    searchBar.type("h");
    searchBar.type("e");
    searchBar.type("l");
    searchBar.type("l");
    searchBar.type("o");
    searchBar.type(" ");
    searchBar.type("w");
    searchBar.type("o");
    searchBar.type("r");
    searchBar.type("l");
    searchBar.type("d");
};

// queryForHelloWorld();

Function.prototype.myDebounce = function (interval) {
    let oldThis = this;
    let timeout;

    return function() {
        setTimeout(function() {
            oldThis();
        }, interval);
    }
}

searchBar.search = searchBar.search.myDebounce(500);
queryForHelloWorld;