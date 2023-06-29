// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sMap = new Map();
    if(s.length != t.length) {
        return false;
    }

    for(let i =0; i <s.length; i++) {
        if(sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1)
        } else {
            sMap.set(s[i], 1)
        }
    }

    for(let i = 0; i < t.length; i++) {
        if(!sMap.has(t[i])) {
            return false
        }
        if(sMap.has(t[i])) {
            sMap.set(t[i], sMap.get(t[i]) - 1)
        }
    }

    return Array.from(sMap).every(e => e[1] ===0)
};

console.log(isAnagram( "aab", "caa"))