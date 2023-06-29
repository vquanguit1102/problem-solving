let input = {
  a_b_c: "1",
  a_b_x: "4",
  a_d_e: "3",
  a_g: "2",
};

const output = {};

for (const key in input) {
  const path = key.split('_');
  let current = output;
  
  for (let i = 0; i < path.length - 1; i++) {
    const prop = path[i];
    if (!current[prop]) {
      current[prop] = {};
    }
    current = current[prop];

  }
  
  current[path[path.length - 1]] = input[key];

}

console.log(output);

// const output = {
//   a: {
//     g: 2,
//     b: {
//       c: "1",
//       x: "4",
//     },
//     d: {
//       e: "3",
//     },
//   },
// };

// var searchInsert = function(nums, target) {
//   let left = 0;
//   let right = nums.length - 1
//   while(left <= right) {
//     let middle = Math.floor((left + right) / 2)

//       if(target === nums[middle]) {
//         return middle
//       }

//       if(target < nums[middle]) {
//         right = middle -1
//       } else {
//         left = middle + 1
//       }
//   }

//   return left;
// };

// console.log(searchInsert([1,3,5,6], 2))
