/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let minimumValue = nums[0];
    let maximumValue = -1;

    for (let i=1; i<nums.length; i++) {
        if (nums[i] > minimumValue) {
            const diff = nums[i] - minimumValue;
            if (diff>maximumValue) {
                maximumValue = diff;
            }
        } else {
            minimumValue = nums[i]
        }
    }
    return maximumValue;
};