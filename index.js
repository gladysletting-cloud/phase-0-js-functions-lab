function calculateTax(amount) {
    return amount * 0.10;
}
console.log(calculateTax(100));

function convertToUpperCase(text) {
    return text.toUpperCase();
}
console.log(convertToUpperCase("hello"));

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(findMaximum(5, 10))

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
console.log(isPalindrome("racecar"));

function calculateDiscountedPrice(price, discount) {
    let discountedPrice = price - (price * (discount / 100));
    return discountedPrice;
}   
console.log(calculateDiscountedPrice(100, 20));


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };