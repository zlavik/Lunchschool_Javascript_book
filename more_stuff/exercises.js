// 1

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // [1, 4, 3]

// 2

// greeting is not defined

// 3

console.log(Math.sqrt(37));

// 4

console.log(Math.max(1, 6, 3, 2));      // 6
console.log(Math.max(-1, -6, -3, -2));  // -1
console.log(Math.max(2, 2));            // 2

// 5

console.log(doSomething('THIS DOESNT MAKE ANY SENSE OK?'));
//[ 3, 5, 3, 4, 6, 4 ]
/// undefined

// 6 

function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

// 7

// Exception handling is a process that deals with errors in a manageable and predictable manner. It uses the try/catch statement to catch exceptions that the code in the try block raises, 
// and lets the programmer deal with the problem in a way that makes sense and perhaps prevents a catastrophic failure or nasty bug.
