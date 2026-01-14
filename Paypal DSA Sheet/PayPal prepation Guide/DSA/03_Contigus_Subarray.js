// Leetcode 525 Contiguous Arrat / Largest Subarray of 0's and 1's

var findMaxLength = function(nums) {
    let m = new Map()
    let s = 0
    m.set(0, -1)
    let r = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            s = s - 1
            if (m.has(s)) {
                r = Math.max(r, i - m.get(s))
            } else {
                m.set(s, i)
            }
        } else if (nums[i] == 1) {
            s = s + 1
            if (m.has(s)) {
                r = Math.max(r, i - m.get(s))
            } else {
                m.set(s, i)
            }
        }
    }

    return r
};