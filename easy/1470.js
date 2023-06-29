/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(i, [nums[i], nums[i + n]]);
  }

  return Array.from(map.values()).flat();
};

console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
