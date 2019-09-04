// function fib(n) {
//     if (n === 1 || n===2) return 1
//     return fib(n-1) +fib(n-2)
// }

// function fib(n) {
//     let memo = Array.from({length: n}).fill(0)
//     memo[0] = memo[1] = 1
//     return helper(memo, n-1)
//
// }
//
// function helper(memo, n) {
//     if (n > 0 && memo[n] === 0) {
//         memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
//     }
//     return memo[n]
// }

// function fib(n) {
//     let dp = []
//     dp[0] = dp[1] = 1
//     for (let i=2;i<n;i++) {
//         dp[i] = dp[i-1] + dp[i-2]
//     }
//     return dp[n-1]
// }
//
//
// // TEST
// console.time("fib")
// console.log(fib(30));
// console.timeEnd("fib")

// let coins = [1, 2, 5]
//
// function coinCharge(coins, amount) {
//     let dp = Array.from({length: amount + 1}).fill(amount+1)
//     dp[0] = 0
//     console.log(dp);
//     for (let i = 1; i < amount + 1; i++) {
//         for (let coin of coins) {
//             if (i < coin) continue
//             dp[i] = Math.min(dp[i], 1 + dp[i - coin])
//         }
//
//     }
//     return (dp[amount] === amount + 1) ? -1 : dp[amount]
// }
//
// console.log(coinCharge(coins, 11));