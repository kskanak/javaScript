class Instructor {
  name;
  professsiion = "web instructor";
  team = "web team";
  age;
  address;
  // method
  supportSession(time) {
    console.log(`Mr/Ms- ${this.name} start support session at ${time}`);
  }
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

const ks = new Instructor("ks", 29, "Dhaka");
console.log(ks);
ks.supportSession(9.0);
