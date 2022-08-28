// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।

const multiply3Parameter = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply3Parameter(2, 4, 5);
console.log(result);

// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।

const multiply = (num1, num2) => {
  const addedNum1 = num1 + 2;
  const addedNum2 = num2 + 2;
  const multiplication = addedNum1 * addedNum2;
  return multiplication;
};
const resultMultiply = multiply(20, 23);
console.log(resultMultiply);
