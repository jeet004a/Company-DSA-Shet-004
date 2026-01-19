//leetcode 1481. Least Number of Unique Integers after k Removals

//Reference Video link - https://www.youtube.com/watch?v=O5v9Tqv2ZDA

var findLeastNumOfUniqueInts = function(arr, k) {
    let m = {}
    for (let i = 0; i < arr.length; i++) {
        if (m[arr[i]]) {
            m[arr[i]] = m[arr[i]] + 1
        } else {
            m[arr[i]] = 1
        }
    }
    let p = Object.values(m)
    p.sort((a, b) => a - b)

    for (let i = 0; i < p.length; i++) {
        k = k - p[i]
        if (k < 0) {
            return p.length - i
        }
    }

    return 0
};