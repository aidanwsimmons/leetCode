// Given two integer arrays nums1 and nums2, return an array of their 
// intersection
// . Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = []

    for(let i = 0; i < nums1.length; i++){
        let num = nums1[i]
        if(!result.includes(num) && nums2.includes(num)) result.push(num)
    }

    for(let i = 0; i < nums2.length; i++){
        let num = nums2[i]
        if(!result.includes(num) && nums1.includes(num)) result.push(num)
    }

    return result
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = []

    for(let num of nums1){
        if(nums2.includes(num) && !result.includes(num)) result.push(num)
    }

    return result
};