const student = {
  fullName: "ks kanak",
  age: 28,
  life: "simple",
};
student.age = 22;
// deleteting property of an object
delete student.fullName;
student.fullName = "ks";
// console.log(student);

//  accessing to all property of objecy by Object.keys(objectName);

const allProperty = Object.keys(student);

// acccessing all values of objects by Object.values(objectName)
const allValues = Object.values(student);

//  accessing both property and value at a time by Object.entries(ObjectName);

const both = Object.entries(student);

//  Object.freeze
