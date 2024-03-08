// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    
    for(let start = 0; start < nums.length; start++){
        let count = 0;
        let end = start;
        while(nums[end] === 1){
            count++
            end++
        }
        start = end
        max = Math.max(max, count)
    }
    return max
};