/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(var i = 0, count = 0; count < nums.length; i ++, count ++){
        if(nums[i] === 0) {
            nums.push(nums.splice(i--, 1)[0]);
        }
    }
    return nums;
};

console.log(moveZeroes([1,0,3,5,0,7]));