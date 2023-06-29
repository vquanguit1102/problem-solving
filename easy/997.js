// https://leetcode.com/problems/find-the-town-judge/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const people = new Map();
  let judge = -1;

  for (let i = 1; i <= n; i++) {
    people.set(i, 0);
  }

  for (let i = 0; i < trust.length; i++) {
    const [a, b] = trust[i];

    people.set(a, people.get(a) - 1);
    people.set(b, people.get(b) + 1);
  }

  people.forEach((value, key, map) => {
    if (value === n - 1) {
      judge = key;
    }
  });

  return judge;
};

console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
);
