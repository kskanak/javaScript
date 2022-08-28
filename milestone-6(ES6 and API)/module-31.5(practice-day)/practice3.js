// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
const car = {
  brand: "tesla",
  model: "T9",
  price: "1.4 m",
  color: "red",
  onCharge: true,
};

const { brand, model, price, color, onCharge } = car;
console.log(onCharge === true ? "awesome" : "also awesome");
console.log(brand, model, price, color);

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।
const numberArray = [2, 4, 5, 6, 7];
const [one, two, three] = numberArray;
console.log(three);
const third = [three];
console.log(third);

// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।

const sumWithDefaultValue = (num1, num2, num3 = 7) => num1 + num2 + num3;
const result = sumWithDefaultValue(4, 5);
console.log(result);
