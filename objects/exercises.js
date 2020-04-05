// ex 1

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

// person.name; or person['name'];

// ex 2
// All the listed values are valid keys


// ex 3

let myArray = {
  0 : "1",
  1: "hello",
  2: "42",
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// ex 4

let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let objValues = Object.keys(obj).map((key) => key.toUpperCase());
console.log(objValues); // => [ 'B', 'A', 'C' ]
console.log(obj); // => { b: 2, a: 1, c: 3 }

// ex 5

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// ex 6

let myProtoObj = {
  foo: 1,
  bar: 2,
};
myObj.qux = 3;
//  Snippet 1 logs qux and snippet 2 logs: qux foo bar

// 7

function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}
// 8 
//The program logs 'hi' and 'hello' 

