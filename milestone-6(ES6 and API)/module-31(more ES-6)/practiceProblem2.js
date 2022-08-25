const user = {
  id: 1,
  name: "Leanne Gramm",
  username: "Brat",
  email: "leannegram@gmail.com",
  address: {
    street: "kulas light",
    suite: " app 556",
    city: "Gwenborough",
    zipcode: 123434,
    geo: {
      lat: "-2343.343",
      lng: "-81.496",
    },
  },
  phone: "023439043",
  website: "hildeguard",
  company: {
    name: "Romaguera-crona",
    catchPhrase: "Multi Layer Clint Server neutral-net",
    bs: "harness real-time e-markets",
  },
};

console.log(user.email);
console.log(user.address);
console.log(user["address"]["city"]);
console.log(user.address.geo.lat);
console.log(user["address"]["geo"]["lat"]);
console.log(user["company"]["name"]);
