//Leetcode 746. Min cost climb stairs


// Below solution is combination is DP and memoization
var minCostClimbingStairs = function(cost) {
    let p = new Array(cost.length).fill(-1)

    function solve(cost, idx) {

        if (idx >= cost.length) {
            return 0
        }
        if (p[idx] != -1) {
            return p[idx]
        }
        let a = cost[idx] + solve(cost, idx + 1)
        let b = cost[idx] + solve(cost, idx + 2)

        return p[idx] = Math.min(a, b)
    }

    return Math.min(solve(cost, 0), solve(cost, 1))
};