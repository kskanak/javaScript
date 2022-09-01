// literals way to create object

const object = {};
object.name = "ks";
object["wala"] = "yo";
object.name = "yohu";

// console.log(object);

// using class to creat object

class Student {
  classs = 5;
  subjects = ["english", "bangla", "Math"];
  school = "yahoo school dot mail g";
  constructor(name, gender, age) {
    this.Name = name;
    this.age = age;
    this.Gender = gender;
  }
  exam = function (time) {
    return `${this.Name}, exam will be held on wednesday at ${time}`;
  };
}

const ks = new Student("ks", "male", 28);
// console.log(ks.exam(9));

const examDAte = ks.exam(0);
console.log(examDAte);

// another class object create

class CommonCarObject {
  wheel = 4;
  motor = true;
  seat = 5;
  autoGear = "yes";
}

class Car extends CommonCarObject {
  constructor(brand, color, price) {
    super();

    this.Name = brand;
    this.Color = color;
    this.Price = price;
  }
}

const tesla = new Car("tesla", "black", 230000);
console.log(tesla);
