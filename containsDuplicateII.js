// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

var containsNearbyDuplicate = function(nums, k) {
    let numMap = {}
    let start = 0;
    for(let i = 0; i < k + 1 && i < nums.length; i++){
        if(!numMap[nums[i]]) {
            numMap[nums[i]] = 1
        }else{
            numMap[nums[i]]++
        }
        if(numMap[nums[i]] === 2) return true
    }
    for(let i = k+1; i < nums.length; i++){
        numMap[nums[start]]--
        start++
        if(!numMap[nums[i]]) {
            numMap[nums[i]] = 1
        }else{
            numMap[nums[i]]++
        }
        if(numMap[nums[i]] === 2) return true

    }
    return false
};