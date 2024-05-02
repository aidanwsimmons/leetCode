// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sorted = strs.map(str => str.split('').sort().join(''))
    let map = {}

    for(let i = 0; i < strs.length; i++){
        if(map[sorted[i]]){
            map[sorted[i]].push(strs[i])
        }else{
            map[sorted[i]] = [strs[i]]
        }
    }

    return Object.values(map)
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}

    for(let str of strs){
        let count = new Array(26).fill(0)

        for(let char of str){
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        let key = count.join('-')
        if(!map[key]){
            map[key] = []
        }
        map[key].push(str)
    }

    return Object.values(map)
};