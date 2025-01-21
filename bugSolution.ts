function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(people: string[]) {
  return people.map(person => greeter(person));
}

let user = ["Jane User", "John Smith"];

console.log(greeterArray(user)); // Correct usage
//Output: ['Hello, Jane User', 'Hello, John Smith']

//Alternative Solution:

function greetJoined(people: string[]) {
  return "Hello, " + people.join(", ");
}
console.log(greetJoined(user)); //Correct usage
// Output: Hello, Jane User, John Smith