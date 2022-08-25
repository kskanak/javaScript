class BycycleObjects {
  wheel = "two";
  break = "yes";
  start = "yes";
  seat = "one";
}

class Bycycle extends BycycleObjects {
  brand;
  color;
  price;
  peddale;
  constructor(brand, color, price, peddale) {
    super();
    this.brand = brand;
    this.color = color;
    this.peddale = peddale;
    this.price = price;
  }
}
const nike = new Bycycle("nike", "gray", "25k", "foot");
console.log(nike);
const hero = new Bycycle("hero", "red", 23000, "auto");
console.log(hero);
