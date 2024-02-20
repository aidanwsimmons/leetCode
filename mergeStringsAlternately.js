// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d

var mergeAlternately = function(word1, word2) {
    let minLength = Math.min(word1.length, word2.length);
    let lengthDiff = word1.length - word2.length;
    let result = '';
    
    for(let i = 0; i < minLength; i++){
        result += word1[i]
        result += word2[i]
    }

    if(lengthDiff > 0){
        result += word1.slice(lengthDiff * -1)
    }else if(lengthDiff < 0){
        result += word2.slice(lengthDiff)
    }
    
    return result
};

//refactored Solution

function mergeAlternately2(word1, word2){
    let result = ''

    for(let i = 0; i< Math.max(word1.length, word2.length); i++){
        if(i < word1.length) result += word1[i]
        if(i < word2.length) result += word2[i]
    }
    return result;
}