// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.

const friends = ["kanak", "ks", "khaled", "khaladul", "kskanak"];

const evenFriend = (friend) => {
  const even = [];
  for (let name of friends) {
    if (name.length % 2 === 0) {
      even.push(name);
    }
  }
  return even;
};

const evenName = evenFriend(friends);
console.log(evenName);
