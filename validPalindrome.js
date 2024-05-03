// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi,"").toLowerCase()
    let start = 0
    let end = s.length - 1
    while(start < end){
        if(s[start] === s[end]){
            start++
            end--
        }
        else{
            return false
        }
    }
    return true
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    console.log(s)
    let left = 0
    let right = s.length - 1
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    
    while(left < right){
        while(letters.indexOf(s[left]) == -1  && left < s.length){
            left++
        }
        while(letters.indexOf(s[right]) == -1  && right > 0){
            right--
        }
        if(s[left] !== s[right]){
            console.log(left, right)
            return false
        }
        left++
        right--
    }
    
    return true
};