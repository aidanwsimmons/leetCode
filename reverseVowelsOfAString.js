// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

var reverseVowels = function(s) {
    let vowels = 'aeiouAEIOU'
    let sVowels = s.split('').filter(char => vowels.indexOf(char) !== -1).reverse()
    let result = ''
    let vIndex = 0

    for(let i = 0; i < s.length; i++){
        let letter = s[i]
        if(vowels.indexOf(letter) === -1){
            result += letter
        }else{
            result += sVowels[vIndex]
            vIndex++
        }
    }

    return result
};