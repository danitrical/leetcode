// // Brute Force
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     const res =[]
//     for (let i=0; i<nums.length; i++) {
//         for (let j = 0; j<nums.length; j++) {
//             if (i!=j && nums[i] + nums[j] == target) {
//                 res.push(...[i,j])
//                 return res;
//             }
//         }
//     }
// };


/** 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const res = new Map()
    for (let i = 0; i<nums.length; i++) {
        const value = target - nums[i]
        if(res.has(value)) {
            return [res.get(target - nums[i]), i]
        }
        res.set(nums[i], i);
    }
};