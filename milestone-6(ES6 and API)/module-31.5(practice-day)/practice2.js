// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

const array = [2, 5, 6, 8, 10, 22, 26, 25, 29];

const result = array.map((Number) => Number * 5);
console.log(result);

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো

const oddNumber = array.filter((Number) => Number % 2 === 1);
console.log(oddNumber);

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।

const arrayObjects = [
  { name: "mobile", price: 2400 },
  { name: "mobile", price: 4000 },
  { name: "mobile", price: 5000 },
  { name: "mobile22", price: 5000 },
  { name: "mobile", price: 2400 },
];
const findResult = arrayObjects.find((obj) => obj.price === 5000);
console.log(findResult);

// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।
