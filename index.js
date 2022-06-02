function hasTargetSum(array, target) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j=i+1; j < array.length; j++) {
      sum = array[i] + array[j];
      if (sum === target) {
        return true;
      }
    }
  }return false;
}

/* 
 hasTargetSum's time complexity is O(n^2)
*/

/* 
  create two nested for loops and add the values of the array together
  check if the sum is equal to the target value and return true if it is
  return false if it is not

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
