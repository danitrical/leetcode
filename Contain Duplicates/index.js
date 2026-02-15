/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    const store = new Set()
    for (let n of nums) {
        if (store.has(n)) {
            return true
        } else {
            store.add(n)
        }
    }
    return false
};
