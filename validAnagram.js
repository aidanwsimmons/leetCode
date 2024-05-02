/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length){
        return false;
    }
    if(s.split('').sort().join('') === t.split('').sort().join('')){
        return true
    }

    return false
};
//ALTERANTE SOLUTION
// const isAnagram = (s, t) => {
//     if( t.length !== s.length ) return false

//     t.split('').forEach(char => s = s.replace(char, ""));

//     return !s.length
// };


// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false

    let map = {}

    for(let char of s){
        map[char] = (map[char] || 0) + 1
    }

    for(let char of t){
        if(!map[char]){
            return false
        }
        else{
            map[char]--
            if(map[char] == 0) delete map[char]
        }
    }

    return Object.values(map).length == 0
};