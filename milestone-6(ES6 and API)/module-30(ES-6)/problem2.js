// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.

const friends = ["kanak", "ks", "khaled", "khaladul", "kskanak"];
console.log(friends);

const even = (names) => {
  let evenFriend = [];
  for (const friend of names) {
    if (friend.length % 2 === 0) {
      evenFriend.push(friend);
    }
  }
  return evenFriend;
};
const evenName = even(friends);
console.log(evenName);
