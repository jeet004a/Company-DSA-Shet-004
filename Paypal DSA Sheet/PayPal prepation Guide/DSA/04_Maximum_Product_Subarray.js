//Leetcode 152. Maximum Product Subarray 
// Video Reference Link - https://www.youtube.com/watch?v=hnswaLJvr6g

var maxProduct = function(nums) {
    let pre = 1
    let suf = 1
    let r = -Infinity
    for (let i = 0; i < nums.length; i++) {
        pre = pre * nums[i]
        suf = suf * nums[nums.length - i - 1]
        r = Math.max(r, Math.max(pre, suf))
        if (pre == 0) {
            pre = 1
        }
        if (suf == 0) {
            suf = 1
        }

    }

    return r
};