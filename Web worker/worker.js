self.onmessage = function (eve) {
    let data = eve.data
    let ans = fibonacci(data)
    this.postMessage(ans)
}

function fibonacci(n) {
    return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2)
}