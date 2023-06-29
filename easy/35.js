/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = parseInt((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 6], 2));

// 0 3

// middle = 2 => true : 1

// 1 3
//middle = 2 => true: 2 3

// 2 3
// middle = 2 =>
