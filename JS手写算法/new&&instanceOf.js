// instanceOf
function instanceOf(L, R) {
    let O = R.prototype
    L = L.__proto__
    while (1) {
        if (L === null) return false
        if (O === L) return true
        L = L.__proto__
    }
}

// new
function myNew() {
    const constructor = [].shift.call(arguments)
    let obj = Object.create(constructor.prototype)
    const ret = constructor.call(obj, ...arguments)
    return typeof ret === "object" ? ret : obj
}