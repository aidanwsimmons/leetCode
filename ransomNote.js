// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let charMap = {}
    for(let char of magazine){
        if(charMap[char]){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }
    for(let char  of ransomNote){
        if(!charMap[char]){
            return false
        }else{
            charMap[char]--
        }
    }
    return true;
};